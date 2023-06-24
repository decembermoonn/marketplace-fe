import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateTime } from 'luxon';
import { FormControl } from '@angular/forms';

export interface ChatMessage {
  sentDateTime: DateTime;
  sentBy: 'SENDER' | 'USER';
  content: string;
}

export interface ChatConfig {
  senderName: string;
  senderAvatar: string;
  userAvatar: string;
}

@Component({
  selector: 'mkt-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @Input() config?: ChatConfig;
  @Input() messages: ChatMessage[] = [];
  @Output() messageSend = new EventEmitter<ChatMessage>();
  messageControl = new FormControl<string>('', { nonNullable: true });

  sendMessage(): void {
    this.messageSend.emit({
      content: this.messageControl.getRawValue(),
      sentBy: 'USER',
      sentDateTime: DateTime.now(),
    });
    this.messageControl.reset('');
  }
}
