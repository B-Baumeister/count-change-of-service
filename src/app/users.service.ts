import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activeUsersUpdated = new EventEmitter<string[]>();
  inactiveUsersUpdated = new EventEmitter<string[]>();

  updateToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeUsersUpdated.emit(this.activeUsers.slice());
    this.inactiveUsersUpdated.emit(this.inactiveUsers.slice());
  }

  updateToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeUsersUpdated.emit(this.activeUsers.slice());
    this.inactiveUsersUpdated.emit(this.inactiveUsers.slice());
  }
}
