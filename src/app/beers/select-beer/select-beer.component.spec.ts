import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBeerComponent } from './select-beer.component';

describe('SelectBeerComponent', () => {
  let component: SelectBeerComponent;
  let fixture: ComponentFixture<SelectBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
