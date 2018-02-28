import {Component, OnInit} from '@angular/core';

import {CheerService} from "../services/cheer.service";
import {Cheer} from "../Cheer";

@Component({
  selector: 'view-cheer',
  templateUrl: './view-cheer.component.html',
  styleUrls: ['./view-cheer.component.css'],
  providers: [CheerService]
})
export class ViewCheerComponent implements OnInit {
  cheer: Cheer;

  constructor(private cheerService: CheerService) {
  }

  ngOnInit() {
    this.cheerService.getCheers().subscribe((response) => {
      if (response.length > 0) {
        this.cheer = response[Math.floor(Math.random() * response.length)];
      } else {
        this.cheer = null;
      }
    });
  }


}
