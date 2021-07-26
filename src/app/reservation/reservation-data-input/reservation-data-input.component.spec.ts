import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDataInputComponent } from './reservation-data-input.component';

describe('ReservationDataInputComponent', () => {
  let component: ReservationDataInputComponent;
  let fixture: ComponentFixture<ReservationDataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDataInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
