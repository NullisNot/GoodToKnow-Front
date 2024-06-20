import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from './types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/api/v1/?';

  private http = inject(HttpClient);

  constructor() {}

  login(credentials: UserCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/?`, credentials);
  }
}
