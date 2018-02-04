import {Injectable} from '@angular/core';
import {Beer} from "../Beer";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Brewery} from "../breweries/Brewery";

@Injectable()
export class BreweryService {
  breweryObservable: Observable<Brewery[]>;

  breweries: Brewery[] = [];

  constructor(private db: AngularFireDatabase) {
    this.breweryObservable= this.getBreweries();
  }

  getBreweries(): Observable<Brewery[]> {
    return this.db.list<Brewery>('/breweries').valueChanges();
  }

  addBrewery(brewery: Brewery): Observable<Brewery[]> {
    this.db.list('/breweries').push(brewery)
    return this.db.list<Brewery>('/breweries').valueChanges();
  }

  getBreweryById(id: string): Brewery{
    let breweries = this.breweries.filter(brewery => brewery.id== id);
    if (breweries.length > 0) {
      return breweries[0];
    }
    return null;
  }

}
