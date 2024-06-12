import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Event, EventIn } from '../../../../services/types';
import { EventsService } from '../../../../services/events.service';

@Component({
  selector: 'app-admin-event-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-event-form.component.html',
  styleUrls: ['./admin-event-form.component.css'],
})
export class AdminEventFormComponent {
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

  'notification': boolean;

  constructor(private eventService: EventsService) {}

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
