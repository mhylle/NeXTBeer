import {Injectable} from '@angular/core';
import {Beer} from "../Beer";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Tasting} from "../../tastings/Tasting";

@Injectable()
export class BeerService {
  beerObservable: Observable<Beer[]>;
  selectedBeer: Beer;
  beers: Beer[] = [];

  constructor(private db: AngularFireDatabase) {
    this.beerObservable = this.getBeers();
  }

  getBeers(): Observable<Beer[]> {
    return this.db.list<Tasting>('/beers').snapshotChanges().map(actions => {
      return actions.map(action => ({key: action.key, ...action.payload.val()}));
    });
  }

  addBeer(beer: Beer): Observable<Beer[]> {
    this.db.list('/beers').push(beer)
    return this.db.list<Beer>('/beers').valueChanges();
    // this.beers.push(beer);
  }

  deleteBeer(beer: Beer) {
    if (beer == null || beer.key == null) {
      console.log('You are about to delete the entire database. That I cannot allow, so I am stopping you right here!');
      return;
    }
    this.db.object('/beers/' + beer.key).remove();
  }

  updateBeer(beer: Beer) {
    if (beer == null || beer.key ==  null) {
      return;
    }

    this.db.object('/beers/' + beer.key).update(beer);
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
