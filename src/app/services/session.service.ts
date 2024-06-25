import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
 logIn: boolean = false;
 

  constructor(private authenticationService: AuthenticationService){
    authenticationService.getToken();
    this.isLogged();
  }


  isLogged(){
    const token = this.authenticationService.getToken();
    if(token != null){
      this.logIn = true
    }
  }

  logOut() {
    this.authenticationService.removeToken();
    this.logIn = false;
  }
}
