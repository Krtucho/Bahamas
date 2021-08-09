import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysReservationDetailsCountsTotalComponent } from './pays-reservation-details-counts-total.component';

describe('PaysReservationDetailsCountsTotalComponent', () => {
  let component: PaysReservationDetailsCountsTotalComponent;
  let fixture: ComponentFixture<PaysReservationDetailsCountsTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysReservationDetailsCountsTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysReservationDetailsCountsTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
