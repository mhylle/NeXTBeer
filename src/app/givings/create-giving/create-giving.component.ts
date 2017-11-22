import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Giving} from "../Giving";
import {FormControl, Validators} from "@angular/forms";
import {Beer} from "../../beers/Beer";
import {GivingService} from "../services/giving.service";
import {User} from "../../users/User";

@Component({
  selector: 'create-giving',
  templateUrl: './create-giving.component.html',
  styleUrls: ['./create-giving.component.css']
})
export class CreateGivingComponent implements OnInit {
  newGiving: Giving = new Giving();
  newBeer: Beer = new Beer();
  hourControl = new FormControl("", [Validators.min(0), Validators.max(23)]);
  minuteControl = new FormControl("", [Validators.min(0), Validators.max(59)]);
  givingTime: Date;


  @Output()
  add: EventEmitter<Giving> = new EventEmitter();

  constructor(private givingService: GivingService) {

    this.newGiving.time = {
      day: 0,
      month: 0,
      year: 0,
      hour: 14,
      minute: 0
    };
  }

  ngOnInit(): void {

  }

  beerSelected(beer: Beer) {
    this.newGiving.beer = beer;
  }

  userSelected(user: User) {
    this.newGiving.giver = user;
  }

  createGiving() {
    console.log(this.newGiving.time.hour);
    console.log(this.givingTime);
    console.log(this.newGiving.beer.name);
    console.log('Adding giving: '
      + 'Name: ' + this.newGiving.name
      + '\nDate: ' + this.newGiving.time.day + '/' + this.newGiving.time.month + '-' + this.newGiving.time.year);
    this.newGiving.time.day = this.givingTime.getDate();
    this.newGiving.time.month = this.givingTime.getMonth() + 1;
    this.newGiving.time.year = this.givingTime.getFullYear();
    this.givingService.addGiving(this.newGiving);
    this.newGiving = new Giving();
    this.newGiving.time = {
      day: 0,
      month: 0,
      year: 0,
      hour: 14,
      minute: 0
    };
  }
}
