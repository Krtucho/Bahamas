import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperDatesComponent } from './swipper-dates.component';

describe('SwipperDatesComponent', () => {
  let component: SwipperDatesComponent;
  let fixture: ComponentFixture<SwipperDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipperDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
