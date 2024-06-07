import { Component } from '@angular/core';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {}
