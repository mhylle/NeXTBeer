import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quote} from "../Quote";


@Component({
  selector: 'create-beer',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  newQuote: Quote = new Quote();
  @Output()
  quoteCreated: EventEmitter<Quote> = new EventEmitter();

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit() {
  }

  createQuote() {
    this.quoteService.addBeer(this.newQuote);
  }
  
}
