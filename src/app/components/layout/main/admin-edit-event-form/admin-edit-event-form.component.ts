import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EventIn } from '../../../../services/types';
import { EventsService } from '../../../../services/events.service';
import { EventStructure } from '../calendar/eventStructure';

@Component({
  selector: 'app-admin-edit-event-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-edit-event-form.component.html',
  styleUrls: ['./admin-edit-event-form.component.css'],
})
export class AdminEventEditComponent {
  @Input() eventToEdit: EventStructure = {
    building: '',
    classroom: '',
    comments: '',
    startsAt: new Date(),
    finishesAt: new Date(),
    link: '',
    subject: '',
    teacher: '',
    id: 0,
    start: '',
    finish: '',
  };

  dialogOpen: boolean = false;

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

  editEvent(eventForm: NgForm) {
    let date = this.eventToEdit.startsAt.toString().split('T')[0];
    this.eventIn = {
      building: this.eventToEdit.building,
      classroom: this.eventToEdit.classroom,
      comments: this.eventToEdit.comments,
      startsAt: this.combineDateAndTime(date, this.eventToEdit.start),
      finishesAt: this.combineDateAndTime(date, this.eventToEdit.finish),
      link: this.eventToEdit.link,
      subject: this.eventToEdit.subject,
      teacher: this.eventToEdit.teacher,
    };

    if (eventForm.invalid) {
      alert('Todos los campos deben estar rellenos');
      return;
    }

    this.eventService
      .updateEvent(this.eventToEdit?.id, this.eventIn)
      .subscribe({
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
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  combineDateAndTime(date: string, time: string): string {
    return `${date}T${time}:00Z`;
  }
}