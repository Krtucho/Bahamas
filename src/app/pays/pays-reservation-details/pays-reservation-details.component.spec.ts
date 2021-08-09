import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysReservationDetailsComponent } from './pays-reservation-details.component';

describe('PaysReservationDetailsComponent', () => {
  let component: PaysReservationDetailsComponent;
  let fixture: ComponentFixture<PaysReservationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysReservationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysReservationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
