import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysClientDetailsEditComponent } from './pays-client-details-edit.component';

describe('PaysClientDetailsEditComponent', () => {
  let component: PaysClientDetailsEditComponent;
  let fixture: ComponentFixture<PaysClientDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysClientDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysClientDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
