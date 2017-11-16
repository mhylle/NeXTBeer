import { Component, OnInit } from '@angular/core';
import {Beer} from "../Beer";
import {BeerService} from "../services/beer.service";

@Component({
  selector: 'create-beer',
  templateUrl: './create-beer.component.html',
  styleUrls: ['./create-beer.component.css']
})
export class CreateBeerComponent implements OnInit {

  newBeer: Beer = new Beer();
  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  createBeer() {
    this.beerService.addBeer(this.newBeer);
    this.newBeer = new Beer();
  }
}
