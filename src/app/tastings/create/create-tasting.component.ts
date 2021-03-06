import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Tasting} from "../Tasting";
import {FormControl, Validators} from "@angular/forms";
import {Beer} from "../../beers/Beer";
import {TastingService} from "../services/tasting.service";
import {User} from "../../users/User";

@Component({
  selector: 'create-tasting',
  templateUrl: './create-tasting.component.html',
  styleUrls: ['./create-tasting.component.css']
})
export class CreateTastingComponent implements OnInit {
  newTasting: Tasting = new Tasting();
  newBeer: Beer = new Beer();
  hourControl = new FormControl("", [Validators.min(0), Validators.max(23)]);
  minuteControl = new FormControl("", [Validators.min(0), Validators.max(59)]);
  tastingTime: Date;


  @Output()
  add: EventEmitter<Tasting> = new EventEmitter();

  constructor(private tastingService: TastingService) {
    this.resetNewTasting()
  }

  ngOnInit(): void {
  }

  private resetNewTasting() {
    this.newTasting.time = {
      day: 0,
      month: 0,
      year: 0,
      hour: 14,
      minute: 30
    };
    this.newTasting.location = "På Kontoret";
  }

  beerSelected(beer: Beer) {
    this.newTasting.beer = beer;
  }

  userSelected(user: User) {
    this.newTasting.giver = user;
  }

  createTasting() {
    this.newTasting.time.day = this.tastingTime.getDate();
    this.newTasting.time.month = this.tastingTime.getMonth() + 1;
    this.newTasting.time.year = this.tastingTime.getFullYear();

    let now = new Date();
    this.newTasting.creationTime = {
      hour: now.getHours(),
      minute: now.getMinutes(),
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear()
    };
    this.tastingService.addTasting(this.newTasting);
    this.resetNewTasting();
  }
}
