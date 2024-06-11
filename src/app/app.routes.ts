import { Routes } from '@angular/router';
import { LandingComponent } from './components/Pages/landing/landing.component';
import { AdminPrincipalCalendarComponent } from './components/Pages/admin-principal-calendar/admin-principal-calendar.component';
import { informationComponent } from './components/Pages/information/information.component';
import { NotificationComponent } from './components/Pages/notification/notification.component';


export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'admin-calendar',
    component: AdminPrincipalCalendarComponent,
  },
  {
    path: 'info',
    component: informationComponent,
  },
  {
    path: 'notification',
    component: NotificationComponent,
  }
  

];
