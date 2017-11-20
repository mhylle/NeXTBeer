import {Component, OnInit} from '@angular/core';
import {BeerService} from "../services/beer.service";
import {Beer} from "../Beer";

@Component({
  selector: 'list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.css'],
  providers: [BeerService]
})
export class ListBeersComponent implements OnInit {
  beers: Beer[];

  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.beerService.getBeers().subscribe((response) => {
      this.beers = response;
    });
  }

}
