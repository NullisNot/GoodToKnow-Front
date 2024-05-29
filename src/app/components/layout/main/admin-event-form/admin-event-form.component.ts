import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MockService } from '../../../../mock.service';

@Component({
  selector: 'app-admin-event-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-event-form.component.html',
  styleUrls: ['./admin-event-form.component.css'],
})
export class AdminEventFormComponent {
  dialogOpen: boolean = false;

  'subject': string;
  'teacher': string;
  'date': string;
  'startsAt': string;
  'finishesAt': string;
  'building': string;
  'classroom': string;
  'link': string;
  'comments': string;
  'notification': boolean;

  constructor(private mockService: MockService) {}

  openDialog() {
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  submitForm() {
    const formData = {
      subject: this.subject,
      teacher: this.teacher,
      startsAt: this.combineDateAndTime(this.date, this.startsAt),
      finishesAt: this.combineDateAndTime(this.date, this.finishesAt),
      building: this.building,
      classroom: this.classroom,
      link: this.link,
      comments: this.comments,
    };

    const notificationData = {
      notification: this.notification,
    };

    this.mockService.sendFormData(formData);
    this.mockService.sendNotification(notificationData);
  }

  combineDateAndTime(date: string, time: string): string {
    const dateTime = new Date(`${date}T${time}:00Z`);
    return dateTime.toISOString();
  }
}
