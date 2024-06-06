import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrincipalCalendarComponent } from './information.component';

describe('AdminPrincipalCalendarComponent', () => {
  let component: AdminPrincipalCalendarComponent;
  let fixture: ComponentFixture<AdminPrincipalCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPrincipalCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPrincipalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
