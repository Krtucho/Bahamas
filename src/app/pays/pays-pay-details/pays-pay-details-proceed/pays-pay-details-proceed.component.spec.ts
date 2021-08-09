import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysPayDetailsProceedComponent } from './pays-pay-details-proceed.component';

describe('PaysPayDetailsProceedComponent', () => {
  let component: PaysPayDetailsProceedComponent;
  let fixture: ComponentFixture<PaysPayDetailsProceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysPayDetailsProceedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysPayDetailsProceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
