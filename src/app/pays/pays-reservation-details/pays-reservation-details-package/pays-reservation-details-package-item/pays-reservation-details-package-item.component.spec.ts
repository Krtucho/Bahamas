import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysReservationDetailsPackageItemComponent } from './pays-reservation-details-package-item.component';

describe('PaysReservationDetailsPackageItemComponent', () => {
  let component: PaysReservationDetailsPackageItemComponent;
  let fixture: ComponentFixture<PaysReservationDetailsPackageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysReservationDetailsPackageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysReservationDetailsPackageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
