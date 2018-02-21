import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Tasting} from "../../tastings/Tasting";
import {Quote} from "../Quote";

@Injectable()
export class QuoteService {
  quoteObservable: Observable<Quote[]>;
  selectedQuote: Quote;
  quotes: Quote[] = [];

  constructor(private db: AngularFireDatabase) {
    this.quoteObservable = this.getQuotes();
  }

  getQuotes(): Observable<Quote[]> {
    return this.db.list<Tasting>('/quotes').snapshotChanges().map(actions => {
      return actions.map(action => ({key: action.key, ...action.payload.val()}));
    });
  }

  addQuote(quote: Quote): Observable<Quote[]> {
    this.db.list('/quotes').push(quote)
    return this.db.list<Quote>('/quotes').valueChanges();
  }

  deleteQuote(quote: Quote) {
    if (quote == null || quote.key == null) {
      console.log('You are about to delete the entire database. That I cannot allow, so I am stopping you right here!');
      return;
    }
    this.db.object('/quotes/' + quote.key).remove();
  }

  updateQuote(quote: Quote) {
    if (quote == null || quote.key ==  null) {
      return;
    }

    this.db.object('/quotes/' + quote.key).update(quote);
  }

}
