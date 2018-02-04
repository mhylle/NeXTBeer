import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Brewery} from "../Brewery";
import {BreweryService} from "../../services/brewery.service";

@Component({
  selector: 'create-brewery',
  templateUrl: './create-brewery.component.html',
  styleUrls: ['./create-brewery.component.css']
})
export class CreateBreweryComponent implements OnInit {

  newBrewery: Brewery = new Brewery();
  @Output()
  breweryCreated: EventEmitter<Brewery> = new EventEmitter();

  constructor(private breweryService: BreweryService) {
  }

  ngOnInit() {
  }

  createBrewery() {
    this.breweryService.addBrewery(this.newBrewery);
  }
}
