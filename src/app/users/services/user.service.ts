import {Injectable} from '@angular/core';
import {User} from "../User";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {
  users: Observable<User[]>;

  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) {
  }

  addUser(user: User) {
    return this.db.list('/users').push(user);
  }

  getUntappdInfo(user: User) {
    return this.httpClient.get('https://api.untappd.com/v4/user/info/' + user.untappdId)
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

  getUsers(): Observable<User[]> {
    return this.db.list<User>('users').valueChanges();
  }

  // updateUser(user: User) {
  //   // Hack. do something about this...
  //   let filteredUsers = this.users.filter(user => user.id !== user.id);
  //   filteredUsers.push(user);
  //   this.users = filteredUsers;
  // }
}
