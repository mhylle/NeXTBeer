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
import { ViewComponent } from './givings/view/view.component';
import { SelectBeerComponent } from './beers/select-beer/select-beer.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateGivingComponent,
    CreateBeerComponent,
    ViewComponent,
    SelectBeerComponent
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
    MatSelectModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
