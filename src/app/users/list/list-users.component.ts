import {Component, OnInit} from '@angular/core';
import {User} from "../User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UserService]
})
export class ListUsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

}
