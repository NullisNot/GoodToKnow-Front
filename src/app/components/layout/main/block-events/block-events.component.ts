import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { EventsService } from '../../../../services/events.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-block-events',
  standalone: true,
  providers: [EventsService, DatePipe],
  imports: [
    FullCalendarModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './block-events.component.html',
  styleUrls: ['./block-events.component.css'],
})
export class BlockEventsComponent {
  dialogOpen: boolean = false;

  event: any = {
    building: '',
    classroom: '',
    comments: '',
    startsAt: '',
    finishesAt: '',
    link: '',
    subject: '',
    teacher: '',
    date: '',
  };

  selectedDates: string[] = [];
  selectedDatesText = '';

  constructor(
    private eventService: EventsService,
    private datePipe: DatePipe
  ) {}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    select: (selectInfo) => this.handleDateSelect(selectInfo),
    locale: esLocale,
    events: [],
  };

  handleDateSelect(selectInfo: any) {
    const selectedDate = new Date(selectInfo.startStr);

    this.toggleSelectedDate(selectedDate);
    this.updateSelectedDatesText();
  }

  toggleSelectedDate(selectedDate: Date) {
    const isoDateString = selectedDate.toISOString().slice(0, 10);

    const index = this.selectedDates.findIndex(
      (date) => date === isoDateString
    );

    if (index === -1) {
      this.selectedDates.push(isoDateString);
    } else {
      this.selectedDates.splice(index, 1);
    }
  }

  updateSelectedDatesText() {
    this.selectedDatesText = this.selectedDates
      .map((isoDate) => this.formatDate(isoDate))
      .join(', ');
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = this.datePipe.transform(date, 'yyyy/MM/dd');
    return formattedDate ? formattedDate : dateString;
  }

  createEventsFromSelectedDates(eventForm: NgForm) {
    if (eventForm.invalid) {
      alert('Por favor, rellena todos los campos');
      return;
    }

    const eventsToCreate = this.selectedDates.map((isoDate) => ({
      building: this.event.building,
      classroom: this.event.classroom,
      comments: this.event.comments,
      startsAt: this.combineDateAndTime(isoDate, this.event.startsAt),
      finishesAt: this.combineDateAndTime(isoDate, this.event.finishesAt),
      link: this.event.link,
      subject: this.event.subject,
      teacher: this.event.teacher,
    }));

    eventsToCreate.forEach((eventToCreate) => {
      this.eventService.createEvent(eventToCreate).subscribe({
        next: () => {},
        error: (error) => {
          console.error('Error creating event', error);
        },
      });
    });

    alert('Eventos creados');
    eventForm.resetForm();
    this.clearSelectedDates();
  }

  clearSelectedDates() {
    this.selectedDates = [];
    this.selectedDatesText = '';
  }

  combineDateAndTime(date: string, time: string): string {
    const dateTime = new Date(`${date}T${time}:00Z`);
    return dateTime.toISOString();
  }
}
