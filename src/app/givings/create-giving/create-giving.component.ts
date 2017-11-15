import {Component, EventEmitter, Output} from '@angular/core';
import {Giving} from "../Giving";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'create-giving',
  templateUrl: './create-giving.component.html',
  styleUrls: ['./create-giving.component.css']
})
export class CreateGivingComponent {
  newGiving: Giving = new Giving();
  hourControl = new FormControl("", [Validators.min(0), Validators.max(23)]);
  minuteControl = new FormControl("", [Validators.min(0), Validators.max(59)]);
  constructor() {
    this.newGiving.time = {
      day: 0,
      month: 0,
      year: 0,
      hour : 14,
      minute: 0
    };
  }

  givingTime: any;

  @Output()
  add: EventEmitter<Giving> = new EventEmitter();

  addGiving() {
    this.add.emit(this.newGiving);
  }

  createGiving() {

    console.log(this.newGiving.time.hour);
    console.log(this.givingTime);
  }
}
