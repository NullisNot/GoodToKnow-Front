import { Injectable, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements OnInit {
 logIn: boolean = false;
 

  constructor(private authenticationService: AuthenticationService){
    authenticationService.getToken();
    this.isLogged();
  }
  ngOnInit(): void {
    this.logIn;
    this.authenticationService.getToken();
    this.isLogged();
  }



  isLogged(){
    const token = this.authenticationService.getToken();
    console.log(token)
    if(token != null){
      this.logIn = true
    }
    console.log(this.logIn)
  }
}
