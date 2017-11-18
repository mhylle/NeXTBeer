import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Giving} from "../Giving";
import {FormControl, Validators} from "@angular/forms";
import {Beer} from "../../beers/Beer";
import {BeerService} from "../../beers/services/beer.service";
import {GivingService} from "../services/giving.service";

@Component({
  selector: 'create-giving',
  templateUrl: './create-giving.component.html',
  styleUrls: ['./create-giving.component.css']
})
export class CreateGivingComponent implements OnInit {
  newGiving: Giving = new Giving();
  newBeer: Beer = new Beer();
  selectedBeer: Beer;
  hourControl = new FormControl("", [Validators.min(0), Validators.max(23)]);
  minuteControl = new FormControl("", [Validators.min(0), Validators.max(59)]);
  givingTime: any;


  @Output()
  add: EventEmitter<Giving> = new EventEmitter();

  constructor(private givingService: GivingService) {

    this.newGiving.time = {
      day: 0,
      month: 0,
      year: 0,
      hour : 14,
      minute: 0
    };
  }

  ngOnInit(): void {

  }

  addGiving() {
    this.add.emit(this.newGiving);
  }

  beerSelected(beer: Beer) {
    this.selectedBeer = beer;
  }

  createGiving() {
    console.log(this.newGiving.time.hour);
    console.log(this.givingTime);
    this.givingService.addGiving(this.newGiving);
    this.newGiving = new Giving();
    this.newGiving.time = {
      day: 0,
      month: 0,
      year: 0,
      hour : 14,
      minute: 0
    };
  }
}
