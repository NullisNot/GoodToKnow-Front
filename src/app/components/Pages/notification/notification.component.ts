import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationCardComponent } from '../../layout/main/notification-card/notification-card.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
  imports: [CommonModule, NotificationCardComponent],
})
export class NotificationComponent {}
