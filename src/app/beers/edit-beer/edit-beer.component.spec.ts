import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MatInputModule} from "@angular/material";
import {BeerService} from "../services/beer.service";
import {environment} from "../../../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EditBeerComponent} from "./edit-beer.component";

describe('EditeBeerComponent', () => {
  let component: EditBeerComponent;
  let fixture: ComponentFixture<EditBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserModule, MatInputModule, BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase)],
      declarations: [EditBeerComponent],
      providers: [BeerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
