import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-event-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-event-form.component.html',
  styleUrls: ['./admin-event-form.component.css'],
})
export class AdminEventFormComponent {
  dialogOpen: boolean = false;

  openDialog() {
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  'subject': string;
  'teacher': string;
  'startsAt': Date;
  'finishesAt': Date;
  'building': string;
  'classroom': string;
  'link': string;
  'comments': string;
  'notification': boolean;

  submitForm() {
    console.log('Datos del formulario:', {
      subject: this.subject,
      teacher: this.teacher,
      startsAt: this.startsAt,
      finishesAt: this.finishesAt,
      building: this.building,
      classroom: this.classroom,
      link: this.link,
      comments: this.comments,
      notification: this.notification,
    });
  }
}
