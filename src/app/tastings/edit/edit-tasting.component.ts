import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tasting} from "../Tasting";
import {FormControl, Validators} from "@angular/forms";
import {Beer} from "../../beers/Beer";
import {TastingService} from "../services/tasting.service";
import {User} from "../../users/User";
import {Router} from "@angular/router";

@Component({
  selector: 'edit-tasting',
  templateUrl: './edit-tasting.component.html',
  styleUrls: ['./edit-tasting.component.css']
})
export class EditTastingComponent implements OnInit {

  @Input()
  tasting: Tasting;
  newBeer: Beer = new Beer();
  hourControl = new FormControl("", [Validators.min(0), Validators.max(23)]);
  minuteControl = new FormControl("", [Validators.min(0), Validators.max(59)]);
  tastingTime: Date;


  @Output()
  add: EventEmitter<Tasting> = new EventEmitter();

  constructor(private router: Router, private tastingService: TastingService) {
  }

  ngOnInit(): void {
    if (this.tastingService.selectedTasting == null) {
      this.router.navigate(["/"]);
    } else {
      this.tasting = this.tastingService.selectedTasting;
      this.tastingTime = new Date(this.tasting.time.year, this.tasting.time.month, this.tasting.time.day);
      this.newBeer = this.tasting.beer;
    }
  }

  beerSelected(beer: Beer) {
    this.tasting.beer = beer;
  }

  userSelected(user: User) {
    this.tasting.giver = user;
  }
  updateTasting() {
    this.tastingService.updateTasting(this.tasting);
  }
  editTasting() {
    // this.newTasting.time.day = this.tastingTime.getDate();
    // this.newTasting.time.month = this.tastingTime.getMonth() + 1;
    // this.newTasting.time.year = this.tastingTime.getFullYear();
    //
    // let now = new Date();
    // this.newTasting.creationTime = {
    //   hour: now.getHours(),
    //   minute: now.getMinutes(),
    //   day: now.getDate(),
    //   month: now.getMonth() + 1,
    //   year: now.getFullYear()
    // };
    // this.tastingService.addTasting(this.newTasting);
    // this.newTasting = new Tasting();
    // this.newTasting.time = {
    //   day: 0,
    //   month: 0,
    //   year: 0,
    //   hour: 14,
    //   minute: 30
    // };
  }
}
