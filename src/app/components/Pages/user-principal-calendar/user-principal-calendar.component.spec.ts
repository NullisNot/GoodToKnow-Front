import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrincipalCalendarComponent } from './user-principal-calendar.component';

describe('UserPrincipalCalendarComponent', () => {
  let component: UserPrincipalCalendarComponent;
  let fixture: ComponentFixture<UserPrincipalCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPrincipalCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPrincipalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
