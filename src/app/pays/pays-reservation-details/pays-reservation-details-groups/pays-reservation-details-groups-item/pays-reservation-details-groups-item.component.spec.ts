import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysReservationDetailsGroupsItemComponent } from './pays-reservation-details-groups-item.component';

describe('PaysReservationDetailsGroupsItemComponent', () => {
  let component: PaysReservationDetailsGroupsItemComponent;
  let fixture: ComponentFixture<PaysReservationDetailsGroupsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysReservationDetailsGroupsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysReservationDetailsGroupsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
