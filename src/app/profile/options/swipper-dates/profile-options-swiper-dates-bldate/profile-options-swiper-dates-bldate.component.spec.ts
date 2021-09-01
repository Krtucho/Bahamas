import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOptionsSwiperDatesBldateComponent } from './profile-options-swiper-dates-bldate.component';

describe('ProfileOptionsSwiperDatesBldateComponent', () => {
  let component: ProfileOptionsSwiperDatesBldateComponent;
  let fixture: ComponentFixture<ProfileOptionsSwiperDatesBldateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOptionsSwiperDatesBldateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOptionsSwiperDatesBldateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
