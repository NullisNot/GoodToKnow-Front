import { Component } from '@angular/core';
import { BlockEventsComponent } from '../../layout/main/block-events/block-events.component';

@Component({
  selector: 'app-admin-create-events',
  standalone: true,
  imports: [BlockEventsComponent],
  templateUrl: './admin-create-events.component.html',
  styleUrl: './admin-create-events.component.css',
})
export class AdminCreateEventsComponent {}
