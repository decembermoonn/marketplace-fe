import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { NgOptimizedImage } from '@angular/common';
import { ChatViewComponent } from './views/chat-view/chat-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersViewComponent } from './views/users-view/users-view.component';

@NgModule({
  declarations: [AppComponent, ChatComponent, ChatViewComponent, LoginViewComponent, UsersViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
