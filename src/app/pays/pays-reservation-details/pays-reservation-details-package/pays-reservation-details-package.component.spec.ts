import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysReservationDetailsPackageComponent } from './pays-reservation-details-package.component';

describe('PaysReservationDetailsPackageComponent', () => {
  let component: PaysReservationDetailsPackageComponent;
  let fixture: ComponentFixture<PaysReservationDetailsPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysReservationDetailsPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysReservationDetailsPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
