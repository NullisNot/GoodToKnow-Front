import { Component, OnInit } from '@angular/core';
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
export class CalendarComponent implements OnInit {
  events: { startDate: string; events: EventStructure[] }[] = [];
  selectedDate: string = new Date().toISOString().split('T')[0];
  noEventsMessage: string = '';
  currentYear: number;
  currentMonth: number;

  constructor(
    private eventsService: EventsService,
    private datePipe: DatePipe
  ) {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth() + 1;
  }

  handleDateClick(arg: any) {
    this.selectedDate = arg.dateStr;
    this.getData(this.selectedDate);
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    },
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    locale: esLocale,
    selectable: true,
    events: [],
  };

  ngOnInit() {
    this.updateEvents();
  }

  updateEvents() {
    this.eventsService
      .getEventsByMonth(this.currentYear, this.currentMonth)
      .subscribe(
        (data: any) => {
          const calendarEvents: any[] = [];

          data.forEach((evento: EventStructure) => {
            const start = new Date(evento.startsAt);
            const formattedStart = this.datePipe.transform(
              start,
              'yyyy-MM-ddTHH:mm:ss'
            );

            calendarEvents.push({
              start: formattedStart,
            });
          });

          this.calendarOptions.events = calendarEvents;
        },
        (error) => {
          console.error('Error al obtener eventos del mes:', error);
        }
      );

    this.getData(this.selectedDate);
  }

  getData(date: string) {
    this.eventsService.getEventByDay(date).subscribe({
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
      },
      error: (error) => {
        console.error('Error al cargar eventos del día:', error);
        this.noEventsMessage = 'Error al cargar eventos del día';
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

  formatDateTitle(date: Date): string {
    return this.datePipe.transform(new Date(date), 'dd MM') || '';
  }
}
