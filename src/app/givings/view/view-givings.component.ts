import {Component, OnInit} from '@angular/core';
import {GivingService} from "../services/giving.service";
import {Giving} from "../Giving";

@Component({
  selector: 'view-givings',
  templateUrl: './view-givings.component.html',
  styleUrls: ['./view-givings.component.css']
})
export class ViewGivingComponent implements OnInit {
  givings: Giving[];

  constructor(private givingService: GivingService) {
  }

  ngOnInit() {
    this.givingService.getGivings().subscribe(response => {
      this.givings = response;
    })
  }
}
