import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysPayDetailsDataComponent } from './pays-pay-details-data.component';

describe('PaysPayDetailsDataComponent', () => {
  let component: PaysPayDetailsDataComponent;
  let fixture: ComponentFixture<PaysPayDetailsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysPayDetailsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysPayDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
