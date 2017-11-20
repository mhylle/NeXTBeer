import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CreateGivingComponent} from './givings/create-giving/create-giving.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule, MatSelectModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BeerService} from "./beers/services/beer.service";
import { CreateBeerComponent } from './beers/create-beer/create-beer.component';
import { ViewGivingComponent } from './givings/view/view-givings.component';
import { SelectBeerComponent } from './beers/select-beer/select-beer.component';
import {GivingService} from "./givings/services/giving.service";
import { CreateUserComponent } from './users/create/create-user.component';
import { ViewUserComponent } from './users/view/view-user.component';
import { ListUsersComponent } from './users/list/list-users.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {environment} from "../environments/environment";



@NgModule({
  declarations: [
    AppComponent,
    CreateGivingComponent,
    CreateBeerComponent,
    ViewGivingComponent,
    SelectBeerComponent,
    CreateUserComponent,
    ViewUserComponent,
    ListUsersComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSelectModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [BeerService, GivingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
