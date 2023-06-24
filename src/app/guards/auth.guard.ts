import { CanActivateFn } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (): boolean => {
  const userAuthService = inject(UserAuthService);
  const token = localStorage.getItem('token');

  return isUserLoggedIn(userAuthService) || isTokenPresent(userAuthService, token);
};

function isUserLoggedIn(userAuthService: UserAuthService): boolean {
  try {
    return !!userAuthService.authenticatedUser;
  } catch {
    return false;
  }
}
function isTokenPresent(userAuthService: UserAuthService, token: string | null): boolean {
  if (!token) {
    return false;
  }
  try {
    userAuthService.authByToken(token);
    return true;
  } catch {
    return false;
  }
}
