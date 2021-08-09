import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysReservationDetailsCountsSubtotalComponent } from './pays-reservation-details-counts-subtotal.component';

describe('PaysReservationDetailsCountsSubtotalComponent', () => {
  let component: PaysReservationDetailsCountsSubtotalComponent;
  let fixture: ComponentFixture<PaysReservationDetailsCountsSubtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysReservationDetailsCountsSubtotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysReservationDetailsCountsSubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
