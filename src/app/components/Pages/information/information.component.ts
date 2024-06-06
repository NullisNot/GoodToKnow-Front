import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from '../../layout/main/info-section/info-section.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [InfoSectionComponent, CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
})
export class informationComponent {}
