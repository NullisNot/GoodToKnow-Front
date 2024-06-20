import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private apiUrl = 'http://localhost:8080/api/v1/notifications';

  private http = inject(HttpClient);

  constructor() {}

  getNotifications(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
