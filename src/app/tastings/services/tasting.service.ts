import {Injectable} from '@angular/core';
import {Tasting} from "../Tasting";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TastingService {

  constructor(private db: AngularFireDatabase) {
  }

  getTastings(): Observable<Tasting[]> {
    return this.db.list<Tasting>('/tastings').valueChanges();
  }

  addTasting(tasting: Tasting) {
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

  getNextTasting(tastings: Tasting[]): Tasting {
    if (tastings.length == 0) {
      return null;
    }
    tastings.sort((a, b) => {
      let aTime = new Date();
      aTime.setHours(a.time.hour);
      aTime.setMinutes(a.time.minute);
      aTime.setDate(a.time.day);
      aTime.setMonth(a.time.month - 1);
      aTime.setFullYear(a.time.year);
      let bTime = new Date();
      bTime.setHours(b.time.hour);
      bTime.setMinutes(b.time.minute);
      bTime.setDate(b.time.day);
      bTime.setMonth(b.time.month - 1);
      bTime.setFullYear(b.time.year);
      return aTime.valueOf() - bTime.valueOf()
    });

    let now = new Date();
    for (let i = 0; i < tastings.length; i++) {
      let timeOfTasting = this.calculateDate(tastings[i]);
      let timeDifference = timeOfTasting.valueOf() - now.valueOf();
      if (timeDifference >= 0) {
        return tastings[i];
      }
    }

    return null;
  }

  private calculateDate(tasting: Tasting) {
    let timeOfCake = new Date();
    timeOfCake.setFullYear(tasting.time.year);
    timeOfCake.setMonth(tasting.time.month - 1);
    timeOfCake.setDate(tasting.time.day);
    timeOfCake.setHours(tasting.time.hour);
    timeOfCake.setMinutes(tasting.time.minute);

    return timeOfCake;
  }
}