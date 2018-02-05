import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Beer} from "../Beer";
import {BeerService} from "../services/beer.service";
import {Brewery} from "../breweries/Brewery";

@Component({
  selector: 'create-beer',
  templateUrl: './create-beer.component.html',
  styleUrls: ['./create-beer.component.css']
})
export class CreateBeerComponent implements OnInit {

  newBeer: Beer = new Beer();
  @Output()
  beerCreated: EventEmitter<Beer> = new EventEmitter();

  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
  }

  createBeer() {
    this.beerService.addBeer(this.newBeer);
  }

  brewerySelected(brewery: Brewery) {
    this.newBeer.brewery = brewery;
  }
}
