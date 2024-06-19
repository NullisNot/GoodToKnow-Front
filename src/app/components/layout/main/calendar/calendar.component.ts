import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FullCalendarModule,
  FullCalendarComponent,
} from '@fullcalendar/angular';
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
import { TelegramNotificationsComponent } from '../telegram-notifications/telegram-notifications.component';
import { TelegramService } from '../../../../services/telegram/telegram-service.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  providers: [EventsService, DatePipe, TelegramService],
  imports: [
    FullCalendarModule,
    CommonModule,
    HttpClientModule,
    AdminEventEditComponent,
    AdminEventFormComponent,
    TelegramNotificationsComponent,
  ],
})
export class CalendarComponent implements OnInit {
  @ViewChild('fullcalendar') fullcalendar!: FullCalendarComponent;

  events: { startDate: string; events: EventStructure[] }[] = [];
  selectedDate: string = new Date().toISOString().split('T')[0];
  noEventsMessage: string = '';
  currentYear: number;
  currentMonth: number;

  isBorderRadius: boolean = false;

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
    return this.datePipe.transform(new Date(date), 'dd MM') || '';
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
          this.fullcalendar.getApi().refetchEvents();
          console.log();
        },
        (error) => {
          console.error('Error al obtener eventos del mes:', error);
        }
      );

    this.getData(this.selectedDate);
  }

  ngAfterViewInit() {
    const prevButton = document.querySelector('.fc-prev-button');
    const nextButton = document.querySelector('.fc-next-button');
    const todayButton = document.querySelector('.fc-today-button');

    if (prevButton) {
      prevButton.addEventListener('click', this.onPrevClick.bind(this));
    }
    if (nextButton) {
      nextButton.addEventListener('click', this.onNextClick.bind(this));
    }
    if (todayButton) {
      todayButton.addEventListener('click', this.onTodayClick.bind(this));
    }
  }

  onPrevClick() {
    if (this.currentMonth === 1) {
      this.currentMonth = 12;
      this.currentYear -= 1;
    } else {
      this.currentMonth -= 1;
    }
    this.updateEvents();
  }

  onNextClick() {
    if (this.currentMonth === 12) {
      this.currentMonth = 1;
      this.currentYear += 1;
    } else {
      this.currentMonth += 1;
    }
    this.updateEvents();
  }

  onTodayClick() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth() + 1;
    this.updateEvents();
  }
}
