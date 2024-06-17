import { Component } from '@angular/core';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { MockService } from '../../../../mock.service';
import { Notification } from '../../../../data/interfaces/notification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-section',
  standalone: true,
  imports: [ NotificationItemComponent, CommonModule ],
  templateUrl: './notification-section.component.html',
  styleUrl: './notification-section.component.css'
})
export class NotificationSectionComponent {
  public notifications: Array<Notification>;
  public notificationsShow: any;

  constructor(private mockService: MockService) { 
      this.notifications = this.mockService.getNotifications()
      this.notificationsShow = this.parseNotification (this.notifications)

          
  }
   parseNotification (notifications: Array <Notification>): any{
     const result  =[]
    for (let index = 0; index < notifications.length; index++) {
      const element:any = notifications[index];
      if (notifications[index].building && notifications[index].classroom){
        element.place= notifications[index].building + ", " + notifications[index].classroom
      }
      if (notifications[index].startsAt && notifications[index].finishesAt){
        element.time= this.getTime(notifications[index].startsAt) + "-" + this.getTime(notifications[index].finishesAt)
      }
      element.title= `Cambio en la próxima clase del ${this.getDate(notifications[index].startsAt)}!`
      result.push(element)
    }
    return result 
  }
  getDate(date:any){
    const day = date.getDate(); 
    const month = date.toLocaleString('es-ES', { month: 'long' });
    return `${day} de ${month}`;
  }
  getTime(date:any){
    const hours = date.getHours(); 
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
