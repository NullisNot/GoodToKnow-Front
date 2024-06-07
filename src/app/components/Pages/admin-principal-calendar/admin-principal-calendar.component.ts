import { Component } from '@angular/core';
import { AdminEventFormComponent } from '../../layout/main/admin-event-form/admin-event-form.component';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../../services/events.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { Evento } from './evento';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-admin-principal-calendar',
  standalone: true,
  templateUrl: './admin-principal-calendar.component.html',
  styleUrl: './admin-principal-calendar.component.css',
  imports: [
    AdminEventFormComponent,
    CommonModule,
    FullCalendarModule,
    HttpClientModule,
    NavComponent,
  ],
  providers: [EventsService],
})
export class AdminPrincipalCalendarComponent {
  events: Evento[] = [];

  constructor(private eventsService: EventsService) {}

  handleDateClick(arg: any) {
    this.getData(arg);
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    locale: esLocale,
    selectable: true,
    events: [],
  };

  getData(arg: any) {
    this.eventsService.getEventByDay(arg.dateStr).subscribe({
      next: (data) => {
        this.events = data;
        this.events.map((evento) => {
          evento.start = this.formatDate(evento.startsAt);
          evento.finish = this.formatDate(evento.finishesAt);
        });
      },
      error: (error) => {
        console.error('Error', error);
      },
    });
  }

  formatDate(date: Date): string {
    return `${new Date(date).getHours().toString().padStart(2, '0')}:${new Date(
      date
    )
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }
}
