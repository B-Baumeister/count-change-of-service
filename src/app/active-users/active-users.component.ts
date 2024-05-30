import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users: string[];

  onSetToInactive(id: number) {
    this.usersService.updateToInactive(id);
  }
  ngOnInit() {
    this.users = this.usersService.activeUsers;
    this.usersService.activeUsersUpdated.subscribe((users: string[]) => {
      this.users = users;
    });
  }
}
