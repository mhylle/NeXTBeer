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

  calculatePercentageToTasting(): string {
    if (this.tasting == null) {
      return "00";
    }
    let creationTime = this.tasting.creationTime;
    let time = this.tasting.time;

    let creationDate = new Date();
    creationDate.setDate(creationTime.day);
    creationDate.setMonth(creationTime.month - 1);
    creationDate.setFullYear(creationTime.year);
    creationDate.setHours(creationTime.hour);
    creationDate.setMinutes(creationTime.minute);

    let servingDate = new Date();
    servingDate.setDate(time.day);
    servingDate.setMonth(time.month - 1);
    servingDate.setFullYear(time.year);
    servingDate.setHours(time.hour);
    servingDate.setMinutes(time.minute);

    let now = new Date();

    let create = creationDate.valueOf() / 1000000;
    let serv = servingDate.valueOf() / 1000000;
    let nowTime = now.valueOf() / 1000000;

    let length = serv - create;
    let left = serv - nowTime;
    let result: string = "";
    if (length > 0) {
      let value = 100 - Math.round(1 - ((left - length) * 100 / length));
      if (value < 10) {
        result = "0" + value;
      } else {
        result = "" + value;
      }
    }
    return result;
  }

}
