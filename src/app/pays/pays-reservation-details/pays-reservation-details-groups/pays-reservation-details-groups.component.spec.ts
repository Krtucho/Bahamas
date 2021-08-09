import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysReservationDetailsGroupsComponent } from './pays-reservation-details-groups.component';

describe('PaysReservationDetailsGroupsComponent', () => {
  let component: PaysReservationDetailsGroupsComponent;
  let fixture: ComponentFixture<PaysReservationDetailsGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysReservationDetailsGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysReservationDetailsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
