import {Injectable} from '@angular/core';
import {Beer} from "../Beer";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BeerService {
  beerObservable: Observable<Beer[]>;

  beers: Beer[] = [];

  constructor(private db: AngularFireDatabase) {
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

    this.beerObservable = this.getBeers();

  }

  getBeers(): Observable<Beer[]> {
    return this.db.list<Beer>('/beers').valueChanges();
  }

  addBeer(beer: Beer) {
    return this.db.list('/beers').push(beer);
    // this.beers.push(beer);
  }

  // getBeerByName(name: string): Beer {
  //   let beers = this.db.list('beers');
  //
  //   (beer => beer.name === name);
  //   if (beers.length > 0) {
  //     return beers[0];
  //   }
  //   return null;
  // }

  getBeerById(id: number): Beer {
    let beers = this.beers.filter(beer => beer.id == id);
    if (beers.length > 0) {
      return beers[0];
    }
    return null;
  }

}
