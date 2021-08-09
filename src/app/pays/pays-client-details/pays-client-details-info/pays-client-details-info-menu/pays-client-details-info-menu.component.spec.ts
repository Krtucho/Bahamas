import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysClientDetailsInfoMenuComponent } from './pays-client-details-info-menu.component';

describe('PaysClientDetailsInfoMenuComponent', () => {
  let component: PaysClientDetailsInfoMenuComponent;
  let fixture: ComponentFixture<PaysClientDetailsInfoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysClientDetailsInfoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysClientDetailsInfoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
