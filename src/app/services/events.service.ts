import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, skip } from 'rxjs';
import { Event, EventIn } from './types';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private apiUrl = 'http://localhost:8080/api/v1/events';

  private http = inject(HttpClient);

  constructor() {}

  getEventByDay(day: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?day=${day}`, {headers: {skip:'true'}});
  }

  createEvent(eventIn: EventIn): Observable<any> {
    return this.http.post(this.apiUrl, eventIn);
  }

  updateEvent(id: number | undefined, eventIn: EventIn): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, eventIn);
  }

  deleteEvent(id: number | undefined): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getEventsByMonth(year: number, month: number): Observable<Event[]> {
    const url = `${this.apiUrl}/${year}/${month}`;
    return this.http.get<Event[]>(url);
  }
}
