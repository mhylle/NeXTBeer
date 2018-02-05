import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Brewery} from "../Brewery";
import {BreweryService} from "../../services/brewery.service";

@Component({
  selector: 'select-brewery',
  templateUrl: './select-brewery.component.html',
  styleUrls: ['./select-brewery.component.css']
})
export class SelectBreweryComponent implements OnInit {

  @Input()
  brewery: Brewery;

  breweries: Observable<Brewery[]>;
  selectedBrewery: Brewery;

  @Output()
  select: EventEmitter<Brewery> = new EventEmitter();

  constructor(private breweryService: BreweryService) {

    this.selectedBrewery = null;
  }

  ngOnInit() {
    this.breweries = this.breweryService.getBreweries();

    if (this.brewery != null) {
      this.selectedBrewery = this.brewery;
    }
  }

  onSelectBrewery() {
    this.select.emit(this.selectedBrewery);
  }

  inputBrewery(b1: Brewery, b2: Brewery) {
    return b1 != null && b2 != null && b1.name === b2.name;
  }
}
