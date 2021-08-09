import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysReservationDetailsGroupsSectionsComponent } from './pays-reservation-details-groups-sections.component';

describe('PaysReservationDetailsGroupsSectionsComponent', () => {
  let component: PaysReservationDetailsGroupsSectionsComponent;
  let fixture: ComponentFixture<PaysReservationDetailsGroupsSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysReservationDetailsGroupsSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysReservationDetailsGroupsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
