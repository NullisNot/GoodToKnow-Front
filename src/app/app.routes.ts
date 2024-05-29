import { Routes } from '@angular/router';
import { LandingComponent } from './components/Pages/landing/landing.component';
import { AdminPrincipalCalendarComponent } from './components/Pages/admin-principal-calendar/admin-principal-calendar.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'admin-calendar',
    component: AdminPrincipalCalendarComponent,
  },
];
