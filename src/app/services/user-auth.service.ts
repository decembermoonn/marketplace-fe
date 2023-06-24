import { Injectable } from '@angular/core';
import { AuthenticatedUser } from '../models/authenticated-user';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private currentAuthenticatedUser?: AuthenticatedUser;
  private currentToken?: string;

  /**
   * @throws Error - when token could not be transformed into authenticated user
   * @param token encoded JWT token string
   */
  authByToken(token: string): void {
    this.currentAuthenticatedUser = new AuthenticatedUser(jwtDecode(token));
    this.currentToken = token;
    localStorage.setItem('token', token);
  }

  get authenticatedUser(): AuthenticatedUser {
    if (!this.currentAuthenticatedUser) {
      throw Error('Cannot obtain authenticated user!');
    }
    return this.currentAuthenticatedUser;
  }

  get token(): string {
    if (!this.currentToken) {
      throw Error('Cannot obtain token!');
    }
    return this.currentToken;
  }
}
