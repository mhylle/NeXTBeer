import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CheerService} from "../services/cheer.service";
import {Cheer} from "../Cheer";

@Component({
  selector: 'list-cheers',
  templateUrl: './list-cheers.component.html',
  styleUrls: ['./list-cheers.component.css'],
  providers: [CheerService]
})
export class ListCheersComponent implements OnInit {
  cheers: Cheer[];

  constructor(private router: Router, private cheerService: CheerService) {
  }

  ngOnInit() {
    this.cheerService.getCheers().subscribe(response => {
      this.cheers = response;
    });
  }

  editCheer(cheer: Cheer) {
    this.cheerService.selectedCheer = cheer;
    this.router.navigate(['edit-cheer']);
  }

  deleteCheer(cheer: Cheer) {
    this.cheerService.deleteCheer(cheer);
  }
}
