import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import API from './api-paths.config';

interface UserResult {
  id: string;
  email: string;
}

interface GetUsersResponse {
  users: UserResult[];
}

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<GetUsersResponse> {
    const url = `${environment.apiBaseUrl}/${API.USERS}`;
    return this.http.get<GetUsersResponse>(url);
  }
}
