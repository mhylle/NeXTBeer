import {Injectable} from '@angular/core';
import {Giving} from "../Giving";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GivingService {
  givings: Observable<Giving[]>;

  constructor(private db: AngularFireDatabase) {
  }

  getGivings(): Observable<Giving[]> {
    return this.db.list<Giving>('/givings').valueChanges();
  }

  addGiving(giving: Giving) {
    console.log('Adding giving: '
      + 'Name: ' + giving.name
      + '\nDate: ' + giving.time.day + '/' + giving.time.month + '-' + giving.time.year);

    this.db.list<Giving>('/givings').push(giving);
  }

  // getGivingByName(name: string): Giving {
  //   let givings = this.givings.filter(giving => giving.name === name);
  //   if (givings.length > 0) {
  //     return givings[0];
  //   }
  //   return null;
  // }

  // getGivingById(id: string): Giving {
  //   let givings = this.givings.filter(giving => giving.id == id);
  //   if (givings.length > 0) {
  //     return givings[0];
  //   }
  //   return null;
  // }

}
