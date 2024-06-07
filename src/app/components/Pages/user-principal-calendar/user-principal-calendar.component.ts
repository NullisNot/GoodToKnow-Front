import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-user-principal-calendar',
  standalone: true,
  templateUrl: './user-principal-calendar.component.html',
  styleUrl: './user-principal-calendar.component.css',
  imports: [FooterComponent, NavComponent],
})
export class UserPrincipalCalendarComponent {}
