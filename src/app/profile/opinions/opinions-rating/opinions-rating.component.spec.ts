import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionsRatingComponent } from './opinions-rating.component';

describe('OpinionsRatingComponent', () => {
  let component: OpinionsRatingComponent;
  let fixture: ComponentFixture<OpinionsRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionsRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
