import {Injectable} from '@angular/core';
import {Beer} from "../Beer";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BeerService {
  beerObservable: Observable<Beer[]>;

  beers: Beer[] = [];

  constructor(private db: AngularFireDatabase) {   
    this.beerObservable = this.getBeers();
  }

  getBeers(): Observable<Beer[]> {
    return this.db.list<Beer>('/beers').valueChanges();
  }

  addBeer(beer: Beer): Observable<Beer[]> {
    this.db.list('/beers').push(beer)
    return this.db.list<Beer>('/beers').valueChanges();
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
