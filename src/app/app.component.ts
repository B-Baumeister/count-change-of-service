import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './Counter.Service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*  providers: [UsersService], */
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  sumOfActiveUsers: number;
  sumOfInactiveUsers: number;
  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}
  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.usersService.activeUsersUpdated.subscribe((users: string[]) => {
      this.sumOfActiveUsers = users.length;
    });
    this.usersService.inactiveUsersUpdated.subscribe((users: string[]) => {
      this.sumOfInactiveUsers = users.length;
    });
  }
}
