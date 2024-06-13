import { Component } from '@angular/core';
import { LoginComponent } from '../../layout/main/login/login.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [LoginComponent, FooterComponent, NavComponent],
})
export class LandingComponent {}
