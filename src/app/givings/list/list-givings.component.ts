import {Component, OnInit} from '@angular/core';
import {GivingService} from "../services/giving.service";
import {Giving} from "../Giving";

@Component({
  selector: 'list-givings',
  templateUrl: './list-givings.component.html',
  styleUrls: ['./list-givings.component.css']
})
export class ListGivingComponent implements OnInit {
  givings: Giving[];

  constructor(private givingService: GivingService) {
  }

  ngOnInit() {
    this.givingService.getGivings().subscribe(response => {
      this.givings = response;
    })
  }
}
