import { Component } from '@angular/core';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-admin-information',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './admin-information.component.html',
  styleUrl: './admin-information.component.css',
})
export class AdminInformationComponent {}
