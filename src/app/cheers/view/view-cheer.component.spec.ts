import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../../environments/environment";
import {AngularFireModule} from "angularfire2";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {UserService} from "../../users/services/user.service";
import {ViewCheerComponent} from "./view-cheer.component";
import {CheerService} from "../services/cheer.service";


describe('ViewCheerComponent', () => {
  let component: ViewCheerComponent;
  let fixture: ComponentFixture<ViewCheerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase), HttpClientModule],
      declarations: [ViewCheerComponent],
      providers: [UserService, CheerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
