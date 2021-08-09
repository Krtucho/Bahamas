import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysReservationDetailsCountsComponent } from './pays-reservation-details-counts.component';

describe('PaysReservationDetailsCountsComponent', () => {
  let component: PaysReservationDetailsCountsComponent;
  let fixture: ComponentFixture<PaysReservationDetailsCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysReservationDetailsCountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysReservationDetailsCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
