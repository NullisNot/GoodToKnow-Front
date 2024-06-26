import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserCredentials } from './types';
import { Token } from '@angular/compiler';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/auth';

  private http = inject(HttpClient);

  constructor() {}

  login(credentials: UserCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token)
          this.tokenTimeout(response.token);
        }
      })
    )
  }

  removeToken(): void {
    localStorage.removeItem('token');
    window.location.href = '/'
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private tokenTimeout(token: string): void {
    const decodedToken: any = jwtDecode(token);
    const isExpired = decodedToken.exp * 1000;
    const timeout = isExpired - Date.now();

    setTimeout(() => {
      alert('Sesion expirada, introduzca sus credenciales de nuevo')
      this.removeToken();
    }, timeout);
  }

}
