import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Tasting} from "../../tastings/Tasting";

import {Cheer} from "../Cheer";

@Injectable()
export class CheerService {
  cheerObservable: Observable<Cheer[]>;
  selectedCheer: Cheer;
  cheers: Cheer[] = [];

  constructor(private db: AngularFireDatabase) {
    this.cheerObservable = this.getCheers();
  }

  getCheers(): Observable<Cheer[]> {
    return this.db.list<Tasting>('/cheers').snapshotChanges().map(actions => {
      return actions.map(action => ({key: action.key, ...action.payload.val()}));
    });
  }

  addCheer(cheer: Cheer): Observable<Cheer[]> {
    this.db.list('/cheers').push(cheer)
    return this.db.list<Cheer>('/cheers').valueChanges();
  }

  deleteCheer(cheer: Cheer) {
    if (cheer == null || cheer.key == null) {
      console.log('You are about to delete the entire database. That I cannot allow, so I am stopping you right here!');
      return;
    }
    this.db.object('/cheers/' + cheer.key).remove();
  }

  updateCheer(cheer: Cheer) {
    if (cheer == null || cheer.key == null) {
      return;
    }

    this.db.object('/cheers/' + cheer.key).update(cheer);
  }

}
