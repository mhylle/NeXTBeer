import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Beer} from "../Beer";
import {BeerService} from "../services/beer.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'select-beer',
  templateUrl: './select-beer.component.html',
  styleUrls: ['./select-beer.component.css']
})
export class SelectBeerComponent implements OnInit {

  beers: Observable<Beer[]>;
  selectedBeer: Beer;

  @Output()
  select: EventEmitter<Beer> = new EventEmitter();

  constructor(private beerService: BeerService) {
    this.selectedBeer = null;
  }

  ngOnInit() {
    this.beers = this.beerService.getBeers();
  }

  onSelectBeer() {
    this.select.emit(this.selectedBeer);
  }

}
