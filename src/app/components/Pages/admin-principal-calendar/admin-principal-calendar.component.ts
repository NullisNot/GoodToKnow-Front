import { Component } from '@angular/core';
import { AdminEventFormComponent } from '../../layout/main/admin-event-form/admin-event-form.component';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../layout/header/nav/nav.component';
import { CalendarComponent } from '../../layout/main/calendar/calendar.component';

@Component({
  selector: 'app-admin-principal-calendar',
  standalone: true,
  templateUrl: './admin-principal-calendar.component.html',
  styleUrl: './admin-principal-calendar.component.css',
  imports: [
    AdminEventFormComponent,
    CommonModule,
    CalendarComponent,
    NavComponent,
  ],
})
export class AdminPrincipalCalendarComponent {}
