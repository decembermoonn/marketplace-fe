import { Component, Input } from '@angular/core';
import { DateTime } from "luxon";

interface Message {
  sentDateTime: DateTime;
  sentBy: 'SENDER' | 'USER';
  content: string;
}

export interface ChatData {
  senderName: string;
  senderAvatar: string;
  userAvatar: string;
  messages: Message[];
}

@Component({
  selector: 'mkt-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input('data') chatData?: ChatData;
}
