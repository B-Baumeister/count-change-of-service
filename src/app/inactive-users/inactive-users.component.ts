import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  users: string[];

  onSetToActive(id: number) {
    this.usersService.updateToActive(id);
  }
  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
    this.usersService.inactiveUsersUpdated.subscribe((users: string[]) => {
      this.users = users;
    });
  }
}
