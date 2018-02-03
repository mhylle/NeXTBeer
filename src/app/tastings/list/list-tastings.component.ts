import {Component, OnInit} from '@angular/core';
import {TastingService} from "../services/tasting.service";
import {Tasting} from "../Tasting";
import {UserService} from "../../users/services/user.service";
import {User} from "../../users/User";
import {Beer} from "../../beers/Beer";
import {Router} from "@angular/router";

@Component({
  selector: 'list-tastings',
  templateUrl: './list-tastings.component.html',
  styleUrls: ['./list-tastings.component.css']
})
export class ListTastingComponent implements OnInit {
  tastings: Tasting[];
  orderedTastings: Tasting[];
  users: User[];

  constructor(private router: Router, private tastingService: TastingService, private userService: UserService) {
  }

  ngOnInit() {
    this.tastingService.getTastings().subscribe(response => {
      this.tastings = response;
      this.sortTastings();
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }


  getBeerRatingByUser(user: User, beer: Beer) {
    return 1;
  }

  sortTastings() {
    this.orderedTastings = this.tastings;
    this.orderedTastings.sort((a, b) => {
      let d1 = new Date(a.time.year, a.time.month, a.time.day, a.time.hour, a.time.minute, 0);
      let d2 = new Date(b.time.year, b.time.month, b.time.day, b.time.hour, b.time.minute, 0);

      return d2.valueOf() - d1.valueOf();
    })
  }

  editTasting(tasting: Tasting) {
    // this.router.navigate(['edit-tasting'], );
  }

  deleteTasting(tasting: Tasting) {
    this.tastingService.deleteTasting(tasting);
  }
}
