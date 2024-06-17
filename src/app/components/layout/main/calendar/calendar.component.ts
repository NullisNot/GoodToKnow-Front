import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../../../services/events.service';
import { EventStructure } from './eventStructure';
import { AdminEventEditComponent } from '../admin-edit-event-form/admin-edit-event-form.component';
import { DatePipe } from '@angular/common';
import { AdminEventFormComponent } from '../admin-event-form/admin-event-form.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  providers: [EventsService, DatePipe],
  imports: [
    FullCalendarModule,
    CommonModule,
    HttpClientModule,
    AdminEventEditComponent,
    AdminEventFormComponent,
  ],
})
export class CalendarComponent {
  events: { startDate: string; events: EventStructure[] }[] = [];
  selectedDate: string = new Date().toISOString().split('T')[0];
  noEventsMessage: string = '';

  isBorderRadius: boolean = false;

  constructor(
    private eventsService: EventsService,
    private datePipe: DatePipe
  ) {
    this.getData({ dateStr: this.selectedDate });
  }

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
        const eventsByDate: { [date: string]: EventStructure[] } = {};

        data.forEach((evento: EventStructure) => {
          evento.start = this.formatDate(evento.startsAt);
          evento.finish = this.formatDate(evento.finishesAt);
          const startDate = this.formatDateTitle(evento.startsAt);

          if (!eventsByDate[startDate]) {
            eventsByDate[startDate] = [];
          }
          eventsByDate[startDate].push(evento);
        });

        this.events = Object.keys(eventsByDate).map((date) => ({
          startDate: date,
          events: eventsByDate[date],
        }));

        this.noEventsMessage =
          this.events.length === 0 ? 'No hay eventos registrados' : '';
        this.fixBorderRadius();
      },
      error: (error) => {
        console.error('Error', error);
        this.noEventsMessage = 'Error al cargar eventos';
        this.fixBorderRadius();
      },
    });
  }

  fixBorderRadius() {
    this.isBorderRadius = this.events.length === 0;
  }

  formatDate(date: Date): string {
    return `${new Date(date).getHours().toString().padStart(2, '0')}:${new Date(
      date
    )
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }

  formatDateTitle(date: Date): string {
    return this.datePipe.transform(new Date(date), 'dd MM', 'es-ES') || '';
  }
}
