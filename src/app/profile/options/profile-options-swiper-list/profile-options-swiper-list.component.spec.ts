import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOptionsSwiperListComponent } from './profile-options-swiper-list.component';

describe('ProfileOptionsSwiperListComponent', () => {
  let component: ProfileOptionsSwiperListComponent;
  let fixture: ComponentFixture<ProfileOptionsSwiperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOptionsSwiperListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOptionsSwiperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
