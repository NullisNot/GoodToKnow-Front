import { Component } from '@angular/core';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-admin-notification',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './admin-notification.component.html',
  styleUrl: './admin-notification.component.css',
})
export class AdminNotificationComponent {}
