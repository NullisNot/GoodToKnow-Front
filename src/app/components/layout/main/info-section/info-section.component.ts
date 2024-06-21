import { Component } from '@angular/core';
import { InfoContainerComponent } from './components/Info-container/info-container.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { MockService } from '../../../../mock.service';
import { Information } from '../../../../data/interfaces/info';

@Component({
  selector: 'app-info-section',
  standalone: true,
  templateUrl: './info-section.component.html',
  styleUrl: './info-section.component.css',
  imports: [InfoContainerComponent, InfoListComponent],
})
export class InfoSectionComponent {
  public information: Information;

  constructor(private mockService: MockService) {
    this.information = this.mockService.getInformation();
  }
}
