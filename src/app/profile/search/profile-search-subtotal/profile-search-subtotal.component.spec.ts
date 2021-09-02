import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSearchSubtotalComponent } from './profile-search-subtotal.component';

describe('ProfileSearchSubtotalComponent', () => {
  let component: ProfileSearchSubtotalComponent;
  let fixture: ComponentFixture<ProfileSearchSubtotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSearchSubtotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSearchSubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
