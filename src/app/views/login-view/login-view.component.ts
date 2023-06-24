import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { KeycloakAuthApiService } from '../../services/http/keycloak-auth-api.service';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'mkt-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent {
  loginForm = this.fb.nonNullable.group({
    login: this.fb.nonNullable.control(''),
    password: this.fb.nonNullable.control(''),
  });

  constructor(
    private fb: FormBuilder,
    private authService: KeycloakAuthApiService,
    private userAuthService: UserAuthService
  ) {}

  onSubmit(): void {
    const { login, password } = this.loginForm.getRawValue();
    this.authService.getToken(login, password).subscribe({
      next: (token) => this.authenticateUser(token),
      error: (err: HttpErrorResponse) => this.handleError(err),
    });
  }

  private authenticateUser(token: string): void {
    try {
      this.userAuthService.authByToken(token);
      // handle success
      console.log(token);
    } catch {
      this.handleError();
    }
  }

  private handleError(err?: HttpErrorResponse): void {
    if (err && err.status === HttpStatusCode.Unauthorized) {
      // handle unauthorized
      console.log('bad credentials');
    } else {
      // handle generic error
      console.log('error');
    }
  }
}
