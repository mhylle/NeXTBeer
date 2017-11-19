import {Injectable} from '@angular/core';
import {User} from "../User";

@Injectable()
export class UserService {

  users: User[] = [];

  constructor() {
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getUserById(id: string) {
    return this.users.filter(user => user.id === id);
  }

  getUserByUntappdId(id: string) {
    return this.users.filter(user => user.untappdId === id);
  }

  getUsers() : User[]  {
    return this.users;
  }

  updateUser(user: User) {
    // Hack. do something about this...
    let filteredUsers = this.users.filter(user => user.id !== user.id);
    filteredUsers.push(user);
    this.users = filteredUsers;
  }
}
