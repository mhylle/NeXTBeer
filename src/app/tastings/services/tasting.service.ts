import {Injectable} from '@angular/core';
import {Tasting} from "../Tasting";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TastingService {
  tastings: Observable<Tasting[]>;

  constructor(private db: AngularFireDatabase) {
  }

  getTastings(): Observable<Tasting[]> {
    return this.db.list<Tasting>('/tastings').valueChanges();
  }

  addTasting(tasting: Tasting) {
    console.log('Adding tasting: '
      + 'Name: ' + tasting.name
      + '\nDate: ' + tasting.time.day + '/' + tasting.time.month + '-' + tasting.time.year);

    this.db.list<Tasting>('/tastings').push(tasting);
  }

  // getTastingByName(name: string): Tasting {
  //   let tastings = this.tastings.filter(tasting => tasting.name === name);
  //   if (tastings.length > 0) {
  //     return tastings[0];
  //   }
  //   return null;
  // }

  // getTastingById(id: string): Tasting {
  //   let tastings = this.tastings.filter(tasting => tasting.id == id);
  //   if (tastings.length > 0) {
  //     return tastings[0];
  //   }
  //   return null;
  // }

}
