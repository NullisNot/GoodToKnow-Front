import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';
import { UserCredentials } from '../../../../services/types';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isUser: boolean = true;
  isAdmin: boolean = false;

  user = {
    code: '',
  };

  admin = {
    adminname: '',
    password: '',
  };

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  toggle(type: string) {
    if (type === 'user') {
      this.isUser = true;
      this.isAdmin = false;
    } else {
      this.isUser = false;
      this.isAdmin = true;
    }
  }

  userLogin() {
    if (this.user.code === 'Programacion.2024') {
      this.router.navigate(['/calendar']);
    } else {
      alert('Codigo incorrecto');
    }
  }

  adminLogin() {
    const credentials: UserCredentials = {
      username: this.admin.adminname, 
      password: this.admin.password
    };

    this.authenticationService.login(credentials).subscribe(
      response =>{
        localStorage.setItem('token', response.token);
        console.log('Login successful', response)
      },
      error => {
        console.error('Login failed', error);
        
      }
      
    )
  }
}
