import {Component, OnInit} from '@angular/core';
import {TastingService} from "../services/tasting.service";
import {Tasting} from "../Tasting";
import {UserService} from "../../users/services/user.service";
import {User} from "../../users/User";

@Component({
  selector: 'view-tasting',
  templateUrl: './view-tasting.component.html',
  styleUrls: ['./view-tasting.component.css']
})
export class ViewTastingComponent implements OnInit {
  tastings: Tasting[];
  users: User[];

  constructor(private tastingService: TastingService, private userService: UserService) {
  }

  ngOnInit() {
    this.tastingService.getTastings().subscribe(response => {
      this.tastings = response;
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

}
