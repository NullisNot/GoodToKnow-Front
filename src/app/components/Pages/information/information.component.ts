import { Component } from '@angular/core';
import { InfoContainerComponent } from './components/Info-container/info-container.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { MockService } from '../../../mock.service';
import { Information } from '../../../data/interfaces/info';



@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './information.component.html',
    styleUrl: './information.component.css',
    imports: [
        InfoContainerComponent,
        InfoListComponent
    ] 
})

export class InformationComponent {
    public information: Information;

    constructor(private mockService: MockService) { 
        this.information = this.mockService.getInformation()
            
    }
}
