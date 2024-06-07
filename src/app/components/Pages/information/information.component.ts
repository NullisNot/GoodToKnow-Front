import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from '../../layout/main/info-section/info-section.component';
import { NavComponent } from '../../layout/header/nav/nav.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [InfoSectionComponent, CommonModule, NavComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
})
export class informationComponent {}
