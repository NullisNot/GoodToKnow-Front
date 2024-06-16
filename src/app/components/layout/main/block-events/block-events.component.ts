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
import { Event, EventIn } from '../../../../services/types';
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

  event: Event = {
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

  eventIn: EventIn = {
    building: '',
    classroom: '',
    comments: '',
    startsAt: '',
    finishesAt: '',
    link: '',
    subject: '',
    teacher: '',
  };

  constructor(private eventService: EventsService) {}

  selectedDates: Date[] = [];
  selectedDatesText = '';

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    selectable: true,
    select: this.handleDateSelect.bind(this),
    locale: esLocale,
    events: [],
  };

  handleDateSelect(selectInfo: any) {
    const selectedDate = selectInfo.start;

    const existingIndex = this.selectedDates.findIndex(
      (date) => date.getTime() === selectedDate.getTime()
    );
    if (existingIndex !== -1) {
      this.selectedDates.splice(existingIndex, 1);
    } else {
      this.selectedDates.push(selectedDate);
    }

    this.updateSelectedDatesText();
  }

  updateSelectedDatesText() {
    this.selectedDatesText = this.selectedDates
      .map((date) => date.toLocaleDateString())
      .join(', ');
  }

  clearSelectedDates() {
    this.selectedDates = [];
    this.selectedDatesText = '';
  }

  createEvent(eventForm: NgForm) {
    this.eventIn = {
      building: this.event.building,
      classroom: this.event.classroom,
      comments: this.event.comments,
      startsAt: this.combineDateAndTime(this.event.date, this.event.startsAt),
      finishesAt: this.combineDateAndTime(
        this.event.date,
        this.event.finishesAt
      ),
      link: this.event.link,
      subject: this.event.subject,
      teacher: this.event.teacher,
    };

    if (eventForm.invalid) {
      alert('Por favor, rellena todos los campos');
      return;
    }
    this.eventService.createEvent(this.eventIn).subscribe({
      next: (data) => {
        alert('Evento Creado');
        eventForm.resetForm();
        this.closeDialog();
      },
      error: (error) => {
        console.error('Error creating event', error);
      },
    });
    this.closeDialog();
  }

  openDialog() {
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  combineDateAndTime(date: string, time: string): string {
    const dateTime = new Date(`${date}T${time}:00Z`);
    return dateTime.toISOString();
  }
}
