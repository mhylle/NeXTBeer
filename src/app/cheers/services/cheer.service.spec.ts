import {inject, TestBed} from '@angular/core/testing';


import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {CheerService} from "./cheer.service";


describe('CheerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase)],
      providers: [CheerService]
    });
  });

  it('should be created', inject([CheerService], (service: CheerService) => {
    expect(service).toBeTruthy();
  }));
});
