import {Injectable} from '@angular/core';
import {Giving} from "../Giving";

@Injectable()
export class GivingService {
  givings: Giving[] = [];

  constructor() {
  }

  getGivings(): Giving[] {
    return this.givings;
  }

  addGiving(giving: Giving) {
    console.log('Adding giving: '
      + 'Name: ' + giving.name
      + '\nDate: ' + giving.time.day + '/' + giving.time.month + '-' + giving.time.year);

    this.givings.push(giving);
  }

  getGivingByName(name: string): Giving {
    let givings = this.givings.filter(giving => giving.name === name);
    if (givings.length > 0) {
      return givings[0];
    }
    return null;
  }

  getGivingById(id: string): Giving {
    let givings = this.givings.filter(giving => giving.id == id);
    if (givings.length > 0) {
      return givings[0];
    }
    return null;
  }

}
