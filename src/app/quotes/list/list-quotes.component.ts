import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Quote} from "../Quote";
import {QuoteService} from "../services/quote.service";

@Component({
  selector: 'list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css'],
  providers: [QuoteService]
})
export class ListQuotesComponent implements OnInit {
  quotes: Quote[];

  constructor(private router: Router, private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteService.getQuotes().subscribe(response => {
      this.quotes = response;
    });
  }
}
