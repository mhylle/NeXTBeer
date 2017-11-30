import {Component, OnInit} from '@angular/core';
import {TastingService} from "../services/tasting.service";
import {Tasting} from "../Tasting";
import {UserService} from "../../users/services/user.service";
import {User} from "../../users/User";
import {Beer} from "../../beers/Beer";
import {Observable} from "rxjs";

@Component({
  selector: 'view-tasting',
  templateUrl: './view-tasting.component.html',
  styleUrls: ['./view-tasting.component.css']
})
export class ViewTastingComponent implements OnInit {
  tasting: Tasting;
  users: User[];
  private hoursRemaining: number;
  private minutesRemaining: number;
  private secondsRemaining: number;

  constructor(private tastingService: TastingService, private userService: UserService) {
  }

  ngOnInit() {
    this.tastingService.getTastings().subscribe(response => {
      this.tasting = this.tastingService.getNextTasting(response);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });

    let timer = Observable.timer(0, 1000)
    timer.subscribe(t => {
      this.updateTimeToBeer(t);
    })
  }

  getBeerRatingByUser(user: User, beer: Beer) {
    if (beer == null || user == null) {
      return 0;
    }
    let result = 1;
    let username: string = user.untappdId;
    if (beer.name == 'Londons Pride') {
      switch (username) {
        case "mhylle":
          result = 4;
          break;
        case "nyby":
          result = 3.75;
          break;
      }
    }
    if (beer.name == 'Warsteiner') {
      switch (username) {
        case "mhylle":
          result = 3;
          break;
        case "nyby":
          result = 3;
          break;
      }
    }
    return result;
  }

  updateTimeToBeer(tick) {
    let now = new Date();
    let timeOfBeer = this.calculateDate(this.tasting);
    if (timeOfBeer != null) {
      this.tasting.datetime = timeOfBeer;
      let timeDifference = timeOfBeer.valueOf() - now.valueOf();
      let seconds = Math.floor(timeDifference / 1000) % 60;
      let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      let hours = Math.floor((timeDifference / (1000 * 60 * 60)));
      this.secondsRemaining = seconds;
      this.minutesRemaining = minutes;
      this.hoursRemaining = hours;
    }
  }

  private calculateDate(tasting: Tasting) {
    if (this.tasting == null) {
      return;
    }
    let timeOfBeer = new Date();
    timeOfBeer.setFullYear(tasting.time.year);
    timeOfBeer.setMonth(tasting.time.month - 1);
    timeOfBeer.setDate(tasting.time.day);
    timeOfBeer.setHours(tasting.time.hour);
    timeOfBeer.setMinutes(tasting.time.minute);
    timeOfBeer.setSeconds(0);

    return timeOfBeer;
  }

  // calculatePercentageToTasting(): string {
  //   if (this.tasting == null) {
  //     return "00";
  //   }
  //   let creationTime = this.tasting.creationTime;
  //   let time = this.tasting.time;
  //
  //   let creationDate = new Date();
  //   creationDate.setDate(creationTime.day);
  //   creationDate.setMonth(creationTime.month - 1);
  //   creationDate.setFullYear(creationTime.year);
  //   creationDate.setHours(creationTime.hour);
  //   creationDate.setMinutes(creationTime.minute);
  //
  //   let servingDate = new Date();
  //   servingDate.setDate(time.day);
  //   servingDate.setMonth(time.month - 1);
  //   servingDate.setFullYear(time.year);
  //   servingDate.setHours(time.hour);
  //   servingDate.setMinutes(time.minute);
  //
  //   let now = new Date();
  //
  //   let create = creationDate.valueOf() / 1000000;
  //   let serv = servingDate.valueOf() / 1000000;
  //   let nowTime = now.valueOf() / 1000000;
  //
  //   let length = serv - create;
  //   let left = serv - nowTime;
  //   let result: string = "";
  //   if (length > 0) {
  //     let value = 100 - Math.round(1 - ((left - length) * 100 / length));
  //     if (value < 10) {
  //       result = "0" + value;
  //     } else {
  //       result = "" + value;
  //     }
  //   }
  //   return result;
  // }

}
