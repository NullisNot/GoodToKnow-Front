import { Component } from '@angular/core';
import { InfoSectionComponent } from "../../layout/main/info-section/info-section.component";

@Component({
    selector: 'app-admin-information',
    standalone: true,
    templateUrl: './admin-information.component.html',
    styleUrl: './admin-information.component.css',
    imports: [InfoSectionComponent]
})
export class AdminInformationComponent {}
