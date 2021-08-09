import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysClientDetailsInfoComponent } from './pays-client-details-info.component';

describe('PaysClientDetailsInfoComponent', () => {
  let component: PaysClientDetailsInfoComponent;
  let fixture: ComponentFixture<PaysClientDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysClientDetailsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysClientDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
