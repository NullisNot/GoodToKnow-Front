import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationSectionComponent } from '../../layout/main/notification-section/notification-section.component';
import { NavComponent } from '../../layout/header/nav/nav.component';



@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NotificationSectionComponent, CommonModule, NavComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {}
