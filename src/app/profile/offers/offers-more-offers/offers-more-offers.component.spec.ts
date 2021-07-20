import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersMoreOffersComponent } from './offers-more-offers.component';

describe('OffersMoreOffersComponent', () => {
  let component: OffersMoreOffersComponent;
  let fixture: ComponentFixture<OffersMoreOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersMoreOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersMoreOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
