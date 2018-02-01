import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectUserComponent} from './select-user.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../../environments/environment";
import {MatInputModule, MatSelectModule} from "@angular/material";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {BrowserModule} from "@angular/platform-browser";
import {AngularFireModule} from "angularfire2";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserService} from "../services/user.service";

describe('SelectUserComponent', () => {
  let component: SelectUserComponent;
  let fixture: ComponentFixture<SelectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserModule, MatInputModule, MatSelectModule, BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase), HttpClientModule],
      declarations: [SelectUserComponent],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
