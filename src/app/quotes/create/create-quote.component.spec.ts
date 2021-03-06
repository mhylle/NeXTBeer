import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateBeerComponent} from './create-beer.component';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MatInputModule} from "@angular/material";
import {BeerService} from "../services/beer.service";
import {environment} from "../../../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('CreateBeerComponent', () => {
  let component: CreateBeerComponent;
  let fixture: ComponentFixture<CreateBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserModule, MatInputModule, BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase)],
      declarations: [CreateBeerComponent],
      providers: [BeerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
