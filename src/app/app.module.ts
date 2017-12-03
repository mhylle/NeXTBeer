import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CreateTastingComponent} from './tastings/create/create-tasting.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BeerService} from "./beers/services/beer.service";
import {CreateBeerComponent} from './beers/create-beer/create-beer.component';
import {ListTastingComponent} from './tastings/list/list-tastings.component';
import {SelectBeerComponent} from './beers/select-beer/select-beer.component';
import {TastingService} from "./tastings/services/tasting.service";
import {CreateUserComponent} from './users/create/create-user.component';
import {ViewUserComponent} from './users/view/view-user.component';
import {ListUsersComponent} from './users/list/list-users.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {environment} from "../environments/environment";
import {RouterModule, Routes} from "@angular/router";
import {ListBeersComponent} from "./beers/list/list-beers.component";
import {UserService} from "./users/services/user.service";
import {PageNotFoundComponent} from "./errorhandling/page-not-found.component";
import {SelectUserComponent} from "./users/select/select-user.component";
import {ViewTastingComponent} from "./tastings/view/view-tasting.component";
import {ListBeerImagesComponent} from "./beers/list/images/list-beer-images.component";


const appRoutes: Routes = [
  {path: 'create-user', component: CreateUserComponent},
  {path: 'list-users', component: ListUsersComponent},
  {path: 'create-beer', component: CreateBeerComponent},
  {path: 'list-beers', component: ListBeersComponent},
  {path: 'list-beer-images', component: ListBeerImagesComponent},
  {path: 'create-tasting', component: CreateTastingComponent},
  {path: 'list-tastings', component: ListTastingComponent},
  {path: 'next-tasting', component: ViewTastingComponent},
  {path: '', redirectTo: '/next-tasting', pathMatch: 'full'},
  {path: '**', component: ViewTastingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateTastingComponent,
    ViewTastingComponent,
    CreateBeerComponent,
    ListTastingComponent,
    SelectBeerComponent,
    CreateUserComponent,
    SelectUserComponent,
    ViewUserComponent,
    ListUsersComponent,
    ListBeersComponent,
    ListBeerImagesComponent,
    PageNotFoundComponent
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
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [BeerService, TastingService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
