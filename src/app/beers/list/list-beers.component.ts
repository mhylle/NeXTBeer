import {Component, OnInit} from '@angular/core';
import {BeerService} from "../services/beer.service";
import {Beer} from "../Beer";
import {Router} from "@angular/router";

@Component({
  selector: 'list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.css']
})
export class ListBeersComponent implements OnInit {
  beers: Beer[];

  constructor(private router: Router, private beerService: BeerService) {
  }

  ngOnInit() {
    this.beerService.getBeers().subscribe((response) => {
      this.beers = response;
    });
  }

  editBeer(beer: Beer) {
    this.beerService.selectedBeer = beer;
    this.router.navigate(['edit-beer']);
  }

  deleteBeer(beer: Beer) {
    this.beerService.deleteBeer(beer);
  }
}
