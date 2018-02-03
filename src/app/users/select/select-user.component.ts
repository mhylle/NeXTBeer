import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../User";
import {Observable} from "rxjs/Observable";
import {UserService} from "../services/user.service";

@Component({
  selector: 'select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {
  users: Observable<User[]>
  selectedUser: User;

  @Input()
  user: User;

  @Output()
  userSelected: EventEmitter<User> = new EventEmitter();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    if (this.user != null) {
      this.selectedUser = this.user;
    }
  }

  onSelectUser() {
    this.userSelected.emit(this.selectedUser);
  }

  inputUser(u1: User, u2: User) {
    let notNull = u1 != null && u2 != null;

    return notNull && u1.shortname === u2.shortname;
  }

}
