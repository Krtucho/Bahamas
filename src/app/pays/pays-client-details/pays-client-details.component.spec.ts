import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysClientDetailsComponent } from './pays-client-details.component';

describe('PaysClientDetailsComponent', () => {
  let component: PaysClientDetailsComponent;
  let fixture: ComponentFixture<PaysClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysClientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
