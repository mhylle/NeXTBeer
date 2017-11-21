import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newUser: User = new User();

  @Output()
  userCreated: EventEmitter<User> = new EventEmitter();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  createUser() {
    this.userService.addUser(this.newUser).then(res => {
      this.userCreated.emit(this.newUser);
    });

    this.newUser = new User();
  }

}
