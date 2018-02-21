import {inject, TestBed} from '@angular/core/testing';


import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {QuoteService} from "./quote.service";

describe('QuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase)],
      providers: [QuoteService]
    });
  });

  it('should be created', inject([QuoteService], (service: QuoteService) => {
    expect(service).toBeTruthy();
  }));
});
