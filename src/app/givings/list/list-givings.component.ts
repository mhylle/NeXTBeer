import {Component, OnInit} from '@angular/core';
import {GivingService} from "../services/giving.service";
import {Giving} from "../Giving";
import {UserService} from "../../users/services/user.service";
import {User} from "../../users/User";
import {Beer} from "../../beers/Beer";

@Component({
  selector: 'list-givings',
  templateUrl: './list-givings.component.html',
  styleUrls: ['./list-givings.component.css']
})
export class ListGivingComponent implements OnInit {
  givings: Giving[];
  users: User[];
  constructor(private givingService: GivingService, private userService: UserService) {
  }

  ngOnInit() {
    this.givingService.getGivings().subscribe(response => {
      this.givings = response;
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  getBeerRatingByUser(user: User, beer: Beer) {
    return 1;
  }
}
