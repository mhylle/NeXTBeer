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
      this.tasting = this.tastingService.getNextTasting(response);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getBeerRatingByUser(user: User, beer: Beer) {
    return 1;
  }

  calculatePercentageToTasting() {
    if (this.tasting == null) {
      return 0;
    }
    let creationTime = this.tasting.creationTime;
    let time = this.tasting.time;

    let creationDate = new Date();
    creationDate.setDate(creationTime.day);
    creationDate.setMonth(creationTime.month);
    creationDate.setFullYear(creationTime.year);
    creationDate.setHours(creationTime.hour);
    creationDate.setMinutes(creationTime.minute);

    let servingDate = new Date();
    servingDate.setDate(time.day);
    servingDate.setMonth(time.month);
    servingDate.setFullYear(time.year);
    servingDate.setHours(time.hour);
    servingDate.setMinutes(time.minute);

    let now = new Date();


    let create = creationDate.valueOf() / 1000000;
    let serv = servingDate.valueOf() / 1000000;
    let nowTime = now.valueOf() / 1000000;

    let length = serv - create;
    let left = serv - nowTime;

    if (length > 0) {
      return Math.round(1 - ((left - length) * 100 / length) * 100);
    }
    return 100;
  }

}
