import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationNumberSmallComponent } from './reservation-number-small.component';

describe('ReservationNumberSmallComponent', () => {
  let component: ReservationNumberSmallComponent;
  let fixture: ComponentFixture<ReservationNumberSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationNumberSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationNumberSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
