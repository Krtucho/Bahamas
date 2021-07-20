import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionsOpinionComponent } from './opinions-opinion.component';

describe('OpinionsOpinionComponent', () => {
  let component: OpinionsOpinionComponent;
  let fixture: ComponentFixture<OpinionsOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionsOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionsOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
