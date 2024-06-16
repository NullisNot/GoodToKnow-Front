import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateEventsComponent } from './admin-create-events.component';

describe('AdminCreateEventsComponent', () => {
  let component: AdminCreateEventsComponent;
  let fixture: ComponentFixture<AdminCreateEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreateEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCreateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
