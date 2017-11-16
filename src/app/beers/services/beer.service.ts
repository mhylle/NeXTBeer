import {Injectable} from '@angular/core';
import {Beer} from "../Beer";

@Injectable()
export class BeerService {

  beers: Beer[] = [];

  constructor() {
    let b1 = new Beer();
    b1.id = 1;
    b1.name = 'Londons Pride';
    b1.description = 'Very good beer with just the right balances in the ingredients';
    b1.type = 'Premium Ale';
    b1.brewery = 'Fullers';
    this.beers.push(b1);
    let b2 = new Beer();
    b2.id = 2;
    b2.name = 'Warsteiner';
    b2.description = 'Generic pilsner';
    b2.type = 'Pilsner';
    b2.brewery = 'Warsteiner';
    this.beers.push(b2);

  }

  getBeers(): Beer[] {
    return this.beers;
  }

  addBeer(beer: Beer) {
    this.beers.push(beer);
  }

  getBeerByName(name: string): Beer {
    let beers = this.beers.filter(beer => beer.name === name);
    if (beers.length > 0) {
      return beers[0];
    }
    return null;
  }

  getBeerById(id: number): Beer {
    let beers = this.beers.filter(beer => beer.id == id);
    if (beers.length > 0) {
      return beers[0];
    }
    return null;
  }

}
