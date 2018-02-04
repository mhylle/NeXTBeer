import {inject, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {BreweryService} from "./brewery.service";

describe('BreweryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase)],
      providers: [BreweryService]
    });
  });

  it('should be created', inject([BreweryService], (service: BreweryService) => {
    expect(service).toBeTruthy();
  }));
});
