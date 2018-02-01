import {inject, TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {HttpClientModule} from "@angular/common/http";

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase), HttpClientModule],
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
