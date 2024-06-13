import { Component } from '@angular/core';
import { AdminEventFormComponent } from '../../layout/main/admin-event-form/admin-event-form.component';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../layout/header/nav/nav.component';
import { CalendarComponent } from '../../layout/main/calendar/calendar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { EventsService } from '../../../services/events.service';
import { AdminEventEditComponent } from '../../layout/main/admin-edit-event-form/admin-edit-event-form.component';

@Component({
  selector: 'app-admin-principal-calendar',
  standalone: true,
  templateUrl: './admin-principal-calendar.component.html',
  styleUrl: './admin-principal-calendar.component.css',
  providers: [EventsService],
  imports: [
    CommonModule,
    CalendarComponent,
    FooterComponent,
    NavComponent,
    AdminEventEditComponent,
    AdminEventFormComponent,
  ],
})
export class AdminPrincipalCalendarComponent {
  selectedEventDay?: string;

  onEventSelected(day: string) {
    this.selectedEventDay = day;
  }
}
