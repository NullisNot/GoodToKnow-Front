import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private apiUrl = 'http://localhost:8081/send';

  private http = inject(HttpClient);

  notifyEvent(message: string): Observable<any> {
    const body = { message };
    return this.http.post(this.apiUrl, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  constructor() {}
}
