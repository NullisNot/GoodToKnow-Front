import { Component } from '@angular/core';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-user-principal-calendar',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './user-principal-calendar.component.html',
  styleUrl: './user-principal-calendar.component.css',
})
export class UserPrincipalCalendarComponent {}
