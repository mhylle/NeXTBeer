import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../User";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {
  users: Observable<User[]>

  selectedUser: User;

  @Output()
  userSelected: EventEmitter<User> = new EventEmitter();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onSelectUser() {

    this.userSelected.emit(this.selectedUser);
  }

}
