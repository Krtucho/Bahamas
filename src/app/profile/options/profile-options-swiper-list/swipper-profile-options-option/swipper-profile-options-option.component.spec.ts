import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipperProfileOptionsOptionComponent } from './swipper-profile-options-option.component';

describe('SwipperProfileOptionsOptionComponent', () => {
  let component: SwipperProfileOptionsOptionComponent;
  let fixture: ComponentFixture<SwipperProfileOptionsOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipperProfileOptionsOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipperProfileOptionsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
