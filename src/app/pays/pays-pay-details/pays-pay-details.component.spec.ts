import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysPayDetailsComponent } from './pays-pay-details.component';

describe('PaysPayDetailsComponent', () => {
  let component: PaysPayDetailsComponent;
  let fixture: ComponentFixture<PaysPayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysPayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysPayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
