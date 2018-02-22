import {Injectable} from '@angular/core';
import {Tasting} from "../Tasting";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TastingService {

  selectedTasting: Tasting;

  constructor(private db: AngularFireDatabase) {
  }

  getTastings(): Observable<Tasting[]> {
    return this.db.list<Tasting>('/tastings').snapshotChanges().map(actions => {
      return actions.map(action => ({key: action.key, ...action.payload.val()}));
    });
  }

  addTasting(tasting: Tasting) {
    this.db.list<Tasting>('/tastings').push(tasting);
  }

  deleteTasting(tasting: Tasting) {
    if (tasting == null || tasting.key == null) {
      console.log('You are about to delete the entire database. That I cannot allow, so I am stopping you right here!');
      return;
    }
    this.db.object('/tastings/' + tasting.key).remove();
  }

  updateTasting(tasting: Tasting) {
    if (tasting == null || tasting.key == null) {
      return;
    }

    this.db.object('/tastings/' + tasting.key).update(tasting);
  }


  getNextTasting(tastings: Tasting[], currentTastingOk: boolean): Tasting {
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
      let positiveTimeDiff = Math.abs(timeDifference);
      let seconds = Math.floor(positiveTimeDiff / 1000);
      let minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
      let hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
      if (currentTastingOk && hours == 0 && Math.abs(minutes) <= 30) {
        return tastings[i];
      } else if (timeDifference >= 0) {
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
