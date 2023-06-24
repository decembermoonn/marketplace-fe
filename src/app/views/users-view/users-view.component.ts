import { Component } from '@angular/core';
import { UsersApiService } from '../../services/http/users-api.service';
import { map } from 'rxjs';

@Component({
  selector: 'mkt-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent {
  readonly users$ = this.usersService.getUsers().pipe(map((res) => res.users));

  constructor(private usersService: UsersApiService) {}
}
