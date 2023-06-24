import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { UserAuthService } from '../../services/user-auth.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ChatConfig, ChatMessage } from '../../components/chat/chat.component';
import { DateTime } from 'luxon';
import { StompChatMessage } from '../../models/stomp-chat-message';

@Component({
  selector: 'mkt-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent implements OnInit, OnDestroy {
  readonly messages: ChatMessage[] = [];
  readonly chatConfig: ChatConfig = {
    senderName: 'John Doe',
    senderAvatar: '',
    userAvatar: '',
  };
  private rxStomp?: RxStomp;
  private readonly senderId = this.userAuthService.authenticatedUser.sub;
  private receiverId = '';

  constructor(private route: ActivatedRoute, private userAuthService: UserAuthService) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((paramMap) => {
      const receiverId = paramMap.get('rid');
      if (receiverId) {
        this.receiverId = receiverId;
        this.connectToChat();
      } else {
        // todo - handle
        console.log('error');
      }
    });
  }

  ngOnDestroy(): void {
    this.rxStomp?.deactivate();
  }

  private connectToChat(): void {
    this.rxStomp = new RxStomp();

    this.rxStomp.configure({
      brokerURL: 'ws://localhost:8080/websocket',
      connectHeaders: {
        Authorization: `Bearer ${this.userAuthService.token}`,
      },
    });

    this.rxStomp.activate();

    this.rxStomp
      .watch({ destination: `/topic/chat/${this.receiverId}/${this.senderId}` })
      .pipe(
        map((stompMessage) => JSON.parse(stompMessage.body) as StompChatMessage),
        map((message) => ({ sentDateTime: DateTime.now(), sentBy: 'SENDER', content: message.content } as ChatMessage))
      )
      .subscribe((message) => this.messages.push(message));
  }

  sendMessage(message: ChatMessage): void {
    const stompChatMessage: StompChatMessage = { type: 'MESSAGE', content: message.content };
    this.rxStomp?.publish({
      destination: `/app/chat/${this.receiverId}`,
      body: JSON.stringify(stompChatMessage),
    });
    this.messages.push(message);
  }
}
