import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorTsService implements HttpInterceptor {

  constructor() {
    console.log('working');
   }
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interceptor working');
    if(req.headers.get('skip')){
      console.log('saltar get');
      return next.handle(req);
    }
    const token = localStorage.getItem('token');
    console.log('get token from local');

    if(token){
      const cloned = req.clone({
        headers: req.headers.set('authorization', `Bearer ${token}`)
      });
      console.log('Token added', cloned);
      return next.handle(cloned);
    }else {
      return next.handle(req);
    }
    
  }


}
