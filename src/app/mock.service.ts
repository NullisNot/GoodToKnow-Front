import { Injectable } from '@angular/core';
import { info } from './data/mock/info';
import { Information } from './data/interfaces/info';

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

  getInformation():Information {
    return info;
  }
}
