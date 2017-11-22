import {Component, OnInit} from '@angular/core';
import {TastingService} from "../services/tasting.service";
import {Tasting} from "../Tasting";
import {UserService} from "../../users/services/user.service";
import {User} from "../../users/User";
import {Beer} from "../../beers/Beer";

@Component({
  selector: 'view-tasting',
  templateUrl: './view-tasting.component.html',
  styleUrls: ['./view-tasting.component.css']
})
export class ViewTastingComponent implements OnInit {
  tasting: Tasting;
  users: User[];

  constructor(private tastingService: TastingService, private userService: UserService) {
  }

  ngOnInit() {
    this.tastingService.getTastings().subscribe(response => {
      let now = new Date();
      for (var i = 0; i < response.length; i++) {
        let tasting = response[i];

        if (tasting.time.day >= now.getDate() && tasting.time.month >= now.getMonth()+1 && tasting.time.year >= now.getFullYear()) {
          this.tasting = tasting;
        }
      }
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getBeerRatingByUser(user: User, beer: Beer) {
    return 1;
  }

}
