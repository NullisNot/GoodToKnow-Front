import { Component } from '@angular/core';
import { AdminEventFormComponent } from '../../layout/main/admin-event-form/admin-event-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-principal-calendar',
  standalone: true,
  imports: [AdminEventFormComponent, CommonModule],
  templateUrl: './admin-principal-calendar.component.html',
  styleUrl: './admin-principal-calendar.component.css',
})
export class AdminPrincipalCalendarComponent {}
