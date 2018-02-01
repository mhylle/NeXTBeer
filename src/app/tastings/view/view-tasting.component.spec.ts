import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TastingService} from "../services/tasting.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../../../environments/environment";
import {AngularFireModule} from "angularfire2";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {UserService} from "../../users/services/user.service";
import {ViewTastingComponent} from "./view-tasting.component";
import {Tasting} from "../Tasting";


describe('ViewTastingComponent', () => {
  let component: ViewTastingComponent;
  let fixture: ComponentFixture<ViewTastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        AngularFireDatabaseModule, AngularFireModule.initializeApp(environment.firebase), HttpClientModule],
      declarations: [ViewTastingComponent],
      providers: [UserService, TastingService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate correct hours to giving', () => {
    let tasting = new Tasting();

    tasting.creationTime = {
      day: 28,
      month: 1,
      year: 2018,
      hour: 14,
      minute: 30,
    };
    tasting.time = {
      day: 2,
      month: 2,
      year: 2018,
      hour: 14,
      minute: 30,
    };

    component.tasting = tasting;

    component.updateTimeToBeer(0);
    expect(component.hoursRemaining).toBeGreaterThan(0);
  })

  it('should calculate a time difference correctly', () => {
    let from = new Date();

    from.setFullYear(2018, 0, 31);
    from.setHours(14);
    from.setMinutes(30);
    let to = new Date();

    to.setFullYear(2018, 1, 2);
    to.setHours(14);
    to.setMinutes(30);

    component.calculateTimeToBeer(from, to);

    expect(component.hoursRemaining).toEqual(48);
    expect(component.minutesRemaining).toEqual(0);
    expect(component.secondsRemaining).toEqual(0);

  })
});
