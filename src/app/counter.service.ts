import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable()
export class CounterService {
  constructor(private usersService: UsersService) {}

  countOfActiveUsers(): number {
    return this.usersService.activeUsers.length;
  }
  countOfInactiveUsers() {
    return this.usersService.inactiveUsers.length;
  }
}
