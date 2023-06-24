export interface StompChatMessage {
  type: 'MESSAGE' | 'TYPING';
  content: string;
}
