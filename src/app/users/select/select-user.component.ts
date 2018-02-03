import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../User";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs/Observable";
import {Beer} from "../../beers/Beer";

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
    if (this.user!= null) {
      this.selectedUser= this.user;
    }
  }

  onSelectUser() {
    this.userSelected.emit(this.selectedUser);
  }

  inputUser(u1: User, u2: User) {
    return u1 != null && u2 != null && u1.id === u2.id;
  }

}
