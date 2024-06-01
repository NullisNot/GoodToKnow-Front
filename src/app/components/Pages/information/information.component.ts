import { Component } from '@angular/core';
import { InfoContainerComponent } from '../../Info-container/info-container.component';


@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './information.component.html',
    styleUrl: './information.component.css',
    imports: [
        InfoContainerComponent

    ] 
})
export class InformationComponent {
  

}
