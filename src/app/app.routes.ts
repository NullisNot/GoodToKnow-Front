import { Routes } from '@angular/router';
import { LandingComponent } from './components/Pages/landing/landing.component';
import { NotificationComponent } from './components/Pages/notification/notification.component';
import { UserPrincipalCalendarComponent } from './components/Pages/user-principal-calendar/user-principal-calendar.component';
import { AdminCreateEventsComponent } from './components/Pages/admin-create-events/admin-create-events.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'calendar',
    component: UserPrincipalCalendarComponent,
  },
  
  {
    path: 'notification',
    component: NotificationComponent,
  },
  {
    path: 'admin-create-events',
    component: AdminCreateEventsComponent,
  },
  {
    path: '**',
    redirectTo:"/calendar",
    pathMatch: "full"
  },
];
