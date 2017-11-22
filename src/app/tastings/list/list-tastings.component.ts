import {Component, OnInit} from '@angular/core';
import {TastingService} from "../services/tasting.service";
import {Tasting} from "../Tasting";
import {UserService} from "../../users/services/user.service";
import {User} from "../../users/User";
import {Beer} from "../../beers/Beer";

@Component({
  selector: 'list-tastings',
  templateUrl: './list-tastings.component.html',
  styleUrls: ['./list-tastings.component.css']
})
export class ListTastingComponent implements OnInit {
  tastings: Tasting[];
  users: User[];
  constructor(private tastingService: TastingService, private userService: UserService) {
  }

  ngOnInit() {
    this.tastingService.getTastings().subscribe(response => {
      this.tastings = response;
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  getBeerRatingByUser(user: User, beer: Beer) {
    return 1;
  }
}
