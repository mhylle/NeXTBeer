import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CreateBeerComponent} from "./beers/create-beer/create-beer.component";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {BeerService} from "./beers/services/beer.service";
import {CreateTastingComponent} from "./tastings/create/create-tasting.component";
import {RouterModule, Routes} from "@angular/router";
import {ListBeerImagesComponent} from "./beers/list/images/list-beer-images.component";
import {CreateUserComponent} from "./users/create/create-user.component";
import {ListBeersComponent} from "./beers/list/list-beers.component";
import {ListTastingComponent} from "./tastings/list/list-tastings.component";
import {ViewTastingComponent} from "./tastings/view/view-tasting.component";
import {ListUsersComponent} from "./users/list/list-users.component";
import {ViewUserComponent} from "./users/view/view-user.component";
import {SelectUserComponent} from "./users/select/select-user.component";
import {PageNotFoundComponent} from "./errorhandling/page-not-found.component";
import {SelectBeerComponent} from "./beers/select-beer/select-beer.component";
import {APP_BASE_HREF} from "@angular/common";

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


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatRadioModule,
        MatInputModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatMenuModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
          appRoutes,
          {enableTracing: false} // <-- debugging purposes only
        )],
      declarations: [
        AppComponent, CreateTastingComponent, ViewTastingComponent, CreateBeerComponent, ListTastingComponent,
        SelectBeerComponent, CreateUserComponent, SelectUserComponent, ViewUserComponent,
        ListUsersComponent, ListBeersComponent, ListBeerImagesComponent, PageNotFoundComponent
      ],
      providers: [
        BeerService, {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'NeXT 1Beer'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NeXT Beer');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
