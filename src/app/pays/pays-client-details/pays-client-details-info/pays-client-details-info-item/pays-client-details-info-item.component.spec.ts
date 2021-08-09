import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysClientDetailsInfoItemComponent } from './pays-client-details-info-item.component';

describe('PaysClientDetailsInfoItemComponent', () => {
  let component: PaysClientDetailsInfoItemComponent;
  let fixture: ComponentFixture<PaysClientDetailsInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysClientDetailsInfoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysClientDetailsInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
