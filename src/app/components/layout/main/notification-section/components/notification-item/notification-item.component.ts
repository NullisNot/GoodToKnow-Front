import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notification-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule],
  templateUrl: './notification-item.component.html',
  styleUrl: './notification-item.component.css'
})
export class NotificationItemComponent {
  @Input () title: string | undefined;
  @Input () subject: string | undefined;
  @Input () teacher: string | undefined;
  @Input () place: string | undefined;
  @Input () time: string | undefined;
  @Input () link: string | undefined;
  @Input () comments: string | undefined;
}


