import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListOfferComponent } from './offers-list-offer.component';

describe('OffersListOfferComponent', () => {
  let component: OffersListOfferComponent;
  let fixture: ComponentFixture<OffersListOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
