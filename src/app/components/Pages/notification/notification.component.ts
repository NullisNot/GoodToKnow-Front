import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationSectionComponent } from '../../layout/main/notification-section/notification-section.component';
import { NavComponent } from '../../layout/header/nav/nav.component';
import { FooterComponent } from '../../layout/footer/footer.component';



@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NotificationSectionComponent, CommonModule, NavComponent, FooterComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {}
