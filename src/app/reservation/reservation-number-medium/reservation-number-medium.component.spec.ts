import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationNumberMediumComponent } from './reservation-number-medium.component';

describe('ReservationNumberMediumComponent', () => {
  let component: ReservationNumberMediumComponent;
  let fixture: ComponentFixture<ReservationNumberMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationNumberMediumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationNumberMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
