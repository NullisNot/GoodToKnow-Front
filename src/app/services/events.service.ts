import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, EventIn } from './types';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private apiUrl = 'http://localhost:8080/api/v1/events';

  private http = inject(HttpClient);

  constructor() {}

  getEventByDay(day: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?day=${day}`);
  }

  createEvent(eventIn: EventIn): Observable<any> {
    return this.http.post(this.apiUrl, eventIn);
  }
}
