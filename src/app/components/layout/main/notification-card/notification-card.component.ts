import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../services/notification/notifications.service';
import { HttpClientModule } from '@angular/common/http';
import { Notification } from './types';

@Component({
  selector: 'app-notification-card',
  standalone: true,
  providers: [NotificationsService],
  imports: [CommonModule, HttpClientModule],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.css',
})
export class NotificationCardComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notificationsService.getNotifications().subscribe({
      next: (data) => {
        this.notifications = data;
      },
      error: (error) => {
        console.error('Error', error);
      },
    });
  }

  formatNotification(notification: string): string {
    return notification.replace(/\n/g, '<br>');
  }
}
