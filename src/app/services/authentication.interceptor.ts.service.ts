import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorTsService implements HttpInterceptor {

  constructor() {
   }
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(req.headers.get('skip')){
      return next.handle(req);
    }
    const token = localStorage.getItem('token');

    if(token){
      const cloned = req.clone({
        headers: req.headers.set('authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    }else {
      return next.handle(req);
    }
    
  }


}
