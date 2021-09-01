import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOptionsSwiperDatesBdateComponent } from './profile-options-swiper-dates-bdate.component';

describe('ProfileOptionsSwiperDatesBdateComponent', () => {
  let component: ProfileOptionsSwiperDatesBdateComponent;
  let fixture: ComponentFixture<ProfileOptionsSwiperDatesBdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOptionsSwiperDatesBdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOptionsSwiperDatesBdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
