import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysPayDetailsFeeComponent } from './pays-pay-details-fee.component';

describe('PaysPayDetailsFeeComponent', () => {
  let component: PaysPayDetailsFeeComponent;
  let fixture: ComponentFixture<PaysPayDetailsFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysPayDetailsFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysPayDetailsFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
