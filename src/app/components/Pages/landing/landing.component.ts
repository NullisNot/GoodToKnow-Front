import { Component } from '@angular/core';
import { LoginComponent } from '../../layout/main/login/login.component';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [LoginComponent, NavComponent],
})
export class LandingComponent {}
