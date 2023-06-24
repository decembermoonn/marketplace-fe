import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { ChatData } from './components/chat/chat.component';

@Component({
  selector: 'mkt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chatData: ChatData = {
    senderName: 'John Doe',
    senderAvatar: '',
    userAvatar: '',
    messages: [
      {
        sentDateTime: DateTime.now().minus({ minute: 5 }),
        content: 'Hello, whats up?',
        sentBy: 'SENDER',
      },
      {
        sentDateTime: DateTime.now().minus({ minute: 2 }),
        content: 'I am enjoying leisure time with my family, thanks!',
        sentBy: 'USER',
      },
      {
        sentDateTime: DateTime.now().minus({ minute: 1, second: 50 }),
        content: 'What about you?',
        sentBy: 'USER',
      },
    ],
  };
}
