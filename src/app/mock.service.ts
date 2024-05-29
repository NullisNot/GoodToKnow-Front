import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor() {}

  sendFormData(data: any): void {
    console.log('Datos enviados del formulario:', data);
  }

  sendNotification(data: any): void {
    console.log('Datos enviados de notificación:', data);
  }
}
