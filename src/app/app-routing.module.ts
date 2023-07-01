import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { UsersViewComponent } from './views/users-view/users-view.component';
import { ChatViewComponent } from './views/chat-view/chat-view.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginViewComponent,
  },
  {
    path: 'users',
    component: UsersViewComponent,
    canActivate: [authGuard],
  },
  {
    path: 'chat',
    component: ChatViewComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'chat',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
