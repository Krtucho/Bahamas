import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysPayDetailsMethodsComponent } from './pays-pay-details-methods.component';

describe('PaysPayDetailsMethodsComponent', () => {
  let component: PaysPayDetailsMethodsComponent;
  let fixture: ComponentFixture<PaysPayDetailsMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysPayDetailsMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysPayDetailsMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
