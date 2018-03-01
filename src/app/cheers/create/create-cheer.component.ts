import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CheerService} from "../services/cheer.service";
import {Cheer} from "../Cheer";
import {UserService} from "../../users/services/user.service";


@Component({
  selector: 'create-cheer',
  templateUrl: './create-cheer.component.html',
  styleUrls: ['./create-cheer.component.css'],
  providers: [CheerService]
})
export class CreateCheerComponent implements OnInit {

  newCheer: Cheer = new Cheer();
  @Output()
  quoteCreated: EventEmitter<Cheer> = new EventEmitter();

  predefinedCheers: Cheer[] =[];
  constructor(private cheerService: CheerService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => {
      if (value != null) {
        for (let i = 0; i < value.length; i++) {
          let user = value[i];
          let c1 = new Cheer();
          c1.cheer = "Skål";
          c1.author = user.firstname + " " + user.familyname;
          this.predefinedCheers.push(c1)
          let c2 = new Cheer();
          c2.cheer = "Det er guf det her!";
          c2.author = user.firstname + " " + user.familyname;
          this.predefinedCheers.push(c2)
        }
      }
    });
  }

  // createCheer() {
  //   let now = new Date();
  //   this.newCheer.creationTime = {
  //     day: now.getDate(),
  //     month: now.getMonth() + 1,
  //     year: now.getFullYear(),
  //     hour: now.getHours(),
  //     minute: now.getMinutes(),
  //     second: now.getSeconds()
  //
  //   };
  //   this.cheerService.addCheer(this.newCheer);
  // }
  createCheer(cheer: Cheer) {
    if (cheer == null) {
      cheer = this.newCheer;
    }
    let now = new Date();
    cheer.creationTime = {
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds()

    };
    this.cheerService.addCheer(cheer);
  }

}
