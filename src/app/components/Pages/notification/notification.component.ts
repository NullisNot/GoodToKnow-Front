import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationSectionComponent } from '../../layout/main/notification-section/notification-section.component';



@Component({
  selector: 'app-information',
  standalone: true,
  imports: [NotificationSectionComponent, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {}
