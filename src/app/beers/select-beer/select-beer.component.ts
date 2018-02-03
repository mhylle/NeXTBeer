import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Beer} from "../Beer";
import {BeerService} from "../services/beer.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'select-beer',
  templateUrl: './select-beer.component.html',
  styleUrls: ['./select-beer.component.css']
})
export class SelectBeerComponent implements OnInit {

  @Input()
  beer: Beer;

  beers: Observable<Beer[]>;
  selectedBeer: Beer;

  @Output()
  select: EventEmitter<Beer> = new EventEmitter();

  constructor(private beerService: BeerService) {

    this.selectedBeer = null;
  }

  ngOnInit() {
    this.beers = this.beerService.getBeers();

    if (this.beer != null) {
      this.selectedBeer = this.beer;
    }
  }

  onSelectBeer() {
    this.select.emit(this.selectedBeer);
  }

  inputBeer(b1: Beer, b2: Beer) {
    return b1 != null && b2 != null && b1.id === b2.id;
  }
}
