import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOptionsOptionComponent } from './profile-options-option.component';

describe('ProfileOptionsOptionComponent', () => {
  let component: ProfileOptionsOptionComponent;
  let fixture: ComponentFixture<ProfileOptionsOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOptionsOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOptionsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
