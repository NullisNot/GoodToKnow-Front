import { Component } from '@angular/core';
import { LoginComponent } from '../../layout/main/login/login.component';
import { NavComponent } from '../../layout/header/nav/nav.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [LoginComponent, NavComponent, HttpClientModule, CommonModule],
  providers:[AuthenticationService]
})
export class LandingComponent {}
