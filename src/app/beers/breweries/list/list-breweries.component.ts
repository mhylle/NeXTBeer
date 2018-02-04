import {Component, OnInit} from '@angular/core';
import {BreweryService} from "../../services/brewery.service";
import {Brewery} from "../Brewery";

@Component({
  selector: 'list-breweries',
  templateUrl: './list-breweries.component.html',
  styleUrls: ['./list-breweries.component.css'],
  providers: [BreweryService]
})
export class ListBreweriesComponent implements OnInit {
  breweries: Brewery[];

  constructor(private breweryService: BreweryService) {
  }

  ngOnInit() {
    this.breweryService.getBreweries().subscribe((response) => {
      this.breweries = response;
    });
  }

}
