import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
     CommonModule,
     RouterModule,
     FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isUser: boolean = true;
  isAdmin: boolean = false;

  user = {
    code: ''
  };

  admin = {
    adminname:'',
    password:''
  };

  toggle(type :string) {
    if(type === 'user'){
      this.isUser = true;
      this.isAdmin = false;
    }else{
      this.isUser = false;
      this.isAdmin = true;
    }
  }

  userLogin(){

  }

  adminLogin(){

  }


}
