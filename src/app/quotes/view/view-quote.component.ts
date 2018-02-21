import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../../quotes/services/quote.service";
import {Quote} from "../Quote";

@Component({
  selector: 'view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.css'],
  providers: [QuoteService]
})
export class ViewQuoteComponent implements OnInit {
  quote: Quote;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteService.getQuotes().subscribe((response)=> {
      if (response.length >0) {
        this.quote = response[Math.floor(Math.random()* response.length)];
      } else {
        this.quote =null;
      }
    });
  }


}
