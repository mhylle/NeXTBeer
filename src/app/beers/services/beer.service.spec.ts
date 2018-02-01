import {inject, TestBed} from '@angular/core/testing';

import {BeerService} from './beer.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";

describe('BeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase)],
      providers: [BeerService]
    });
  });

  it('should be created', inject([BeerService], (service: BeerService) => {
    expect(service).toBeTruthy();
  }));
});
