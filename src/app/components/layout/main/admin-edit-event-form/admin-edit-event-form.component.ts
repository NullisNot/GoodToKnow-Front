import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Event, EventIn } from '../../../../services/types';
import { EventsService } from '../../../../services/events.service';

@Component({
  selector: 'app-admin-edit-event-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-edit-event-form.component.html',
  styleUrls: ['./admin-edit-event-form.component.css'],
})
export class AdminEventEditComponent implements OnInit {
  @Input() geteventDay?: string;
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
  notification: boolean = false;

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    if (this.geteventDay) {
      this.loadEvent(this.geteventDay);
    }
  }

  @Input()
  set eventDay(day: string){
    this.loadEvent(day);
  }

  loadEvent(day: string): void {
    this.eventService.getEventByDay(day).subscribe((event) => {
      this.event = {
        ...event,
        date: event.startsAt.split('T')[0],
        startsAt: event.startsAt.split('T')[1].slice(0, 5),
        finishesAt: event.finishesAt.split('T')[1].slice(0, 5),
      };
      this.dialogOpen = true;
    });
  }

  editEvent(eventForm: NgForm) {
    this.eventIn = {
      building: this.event.building,
      classroom: this.event.classroom,
      comments: this.event.comments,
      startsAt: this.combineDateAndTime(this.event.date, this.event.startsAt),
      finishesAt: this.combineDateAndTime(this.event.date, this.event.finishesAt),
      link: this.event.link,
      subject: this.event.subject,
      teacher: this.event.teacher,
    };

    if (eventForm.invalid) {
      alert('Todos los campos deben estar rellenos');
      return;
    }

    this.eventService.updateEvent(this.event.date, this.eventIn).subscribe({
      next: () => {
        alert('Evento Actualizado');
        this.closeDialog();
      },
      error: (error) => {
        console.error('Error updating event', error);
      },
    });
  }

  openDialog() {
    this.dialogOpen = true;
    if (this.geteventDay) {
      this.loadEvent(this.geteventDay);
    }
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  combineDateAndTime(date: string, time: string): string {
    const dateTime = new Date(`${date}T${time}:00Z`);
    return dateTime.toISOString();
  }
}
