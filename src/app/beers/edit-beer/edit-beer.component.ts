import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Beer} from "../Beer";
import {BeerService} from "../services/beer.service";
import {Brewery} from "../breweries/Brewery";
import {Router} from "@angular/router";

@Component({
  selector: 'edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent implements OnInit {

  beer: Beer;
  @Output()
  beerCreated: EventEmitter<Beer> = new EventEmitter();

  constructor(private router: Router, private beerService: BeerService) {
  }

  ngOnInit() {
    if (this.beerService.selectedBeer == null) {
      console.log('no beer selected');
      this.router.navigate(["/"]);
    } else {
      this.beer = this.beerService.selectedBeer;
    }
  }

  updateBeer() {
    this.beerService.updateBeer(this.beer);
  }

  brewerySelected(brewery: Brewery) {
    this.beer.brewery = brewery;
  }
}
