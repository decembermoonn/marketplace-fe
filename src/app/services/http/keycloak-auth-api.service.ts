import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface KeycloakToken {
  access_token: string;
}

interface KeycloakTokenRequest extends Record<string, string> {
  grant_type: string;
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class KeycloakAuthApiService {
  private readonly url = environment.keycloakUrl;
  private readonly clientId = environment.keycloakClientId;
  private readonly clientSecret = environment.keycloakClientSecret;

  constructor(private http: HttpClient) {}

  getToken(username: string, password: string): Observable<string> {
    const request: KeycloakTokenRequest = {
      grant_type: 'password',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      username,
      password,
    };
    const requestBody = new URLSearchParams(request);

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http
      .post<KeycloakToken>(this.url, requestBody.toString(), { headers })
      .pipe(map((token) => token.access_token));
  }
}
