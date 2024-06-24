import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramNotificationsComponent } from './telegram-notifications.component';

describe('TelegramNotificationsComponent', () => {
  let component: TelegramNotificationsComponent;
  let fixture: ComponentFixture<TelegramNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelegramNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelegramNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
