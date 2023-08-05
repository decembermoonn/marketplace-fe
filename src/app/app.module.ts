import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { NgOptimizedImage } from '@angular/common';
import { ChatViewComponent } from './views/chat-view/chat-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsersViewComponent } from './views/users-view/users-view.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HttpResponseInterceptor } from './interceptors/http-response.interceptor';

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
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor,
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HttpResponseInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
