import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateUserComponent} from './create-user.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../../environments/environment";
import {MatInputModule} from "@angular/material";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {BrowserModule} from "@angular/platform-browser";
import {AngularFireModule} from "angularfire2";
import {FormsModule} from "@angular/forms";
import {UserService} from "../services/user.service";
import {HttpClientModule} from "@angular/common/http";

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserModule, MatInputModule, BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase), HttpClientModule],
      declarations: [CreateUserComponent],
      providers: [UserService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
