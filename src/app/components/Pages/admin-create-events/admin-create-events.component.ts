import { Component } from '@angular/core';
import { BlockEventsComponent } from '../../layout/main/block-events/block-events.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-admin-create-events',
  standalone: true,
  imports: [BlockEventsComponent, FooterComponent, NavComponent],
  templateUrl: './admin-create-events.component.html',
  styleUrl: './admin-create-events.component.css',
})
export class AdminCreateEventsComponent {}
