import {Injectable} from '@angular/core';
import {User} from "../User";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class UserService {
  // users: Observable<User[]>;

  constructor(private db: AngularFireDatabase) {
  }

  addUser(user: User) {
    return this.db.list('/users').push(user);
  }

  // getUntappdInfo(user: User) {
  //   return this.httpClient.get('https://api.untappd.com/v4/user/info/' + user.untappdId)
  // }

  getUsers(): Observable<User[]> {
    return this.db.list<User>('/users').snapshotChanges().map(actions => {
      return actions.map(action => ({key: action.key, ...action.payload.val()}));
    });
  }
}
