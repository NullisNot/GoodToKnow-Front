import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditEventFormComponent } from './admin-edit-event-form.component';

describe('AdminEditEventFormComponent', () => {
  let component: AdminEditEventFormComponent;
  let fixture: ComponentFixture<AdminEditEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditEventFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEditEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
