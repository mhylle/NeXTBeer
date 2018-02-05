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
  untappdInfo: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      for (let i = 0; i < this.users.length; i++) {
        let user = this.users[i];
        user.totalBadges = "0";
        // this.getUntappdBadges(user).subscribe(result => {
        //   user.totalBadges = result.stats.total_badges;
        // });
      }
    });
  }

//  getUntappdBadges(user: User) {
//    return this.userService.getUntappdInfo(user);
//  }

}
