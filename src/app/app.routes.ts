import { Routes } from '@angular/router';
import { LandingComponent } from './components/Pages/landing/landing.component';
import { AdminPrincipalCalendarComponent } from './components/Pages/admin-principal-calendar/admin-principal-calendar.component';
import { informationComponent } from './components/Pages/information/information.component';
import { NotificationComponent } from './components/Pages/notification/notification.component';
import { UserPrincipalCalendarComponent } from './components/Pages/user-principal-calendar/user-principal-calendar.component';
import { AdminNotificationComponent } from './components/Pages/admin-notification/admin-notification.component';
import { AdminInformationComponent } from './components/Pages/admin-information/admin-information.component';
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
    path: 'info',
    component: informationComponent,
  },
  {
    path: 'notification',
    component: NotificationComponent,
  },
  
  {
    path: 'admin-calendar',
    component: AdminPrincipalCalendarComponent,
  },
  {
    path: 'admin-notification',
    component: AdminNotificationComponent,
  },
  {
    path: 'admin-info',
    component: AdminInformationComponent,
  },
  {
    path: 'admin-create-events',
    component: AdminCreateEventsComponent,
  },
];
