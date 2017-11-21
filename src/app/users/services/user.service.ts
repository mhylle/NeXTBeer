import {Injectable} from '@angular/core';
import {User} from "../User";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class UserService {
  users: Observable<User[]>;

  constructor(private db: AngularFireDatabase) {
  }

  addUser(user: User) {
    return this.db.list('/users').push(user);
  }

  // getUserById(id: string) {
  //   return this.users.filter(user => user.id === id);
  // }

  // getUserByUntappdId(id: string) {
  //   return this.users.filter((user) => {
  //     user;
  //   })
  //
  // }

  getUsers() : Observable<User[]>  {
    return this.db.list<User>('users').valueChanges();
  }

  // updateUser(user: User) {
  //   // Hack. do something about this...
  //   let filteredUsers = this.users.filter(user => user.id !== user.id);
  //   filteredUsers.push(user);
  //   this.users = filteredUsers;
  // }
}
