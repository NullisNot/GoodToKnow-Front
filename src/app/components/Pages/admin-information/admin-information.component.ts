import { Component } from '@angular/core';
import { NavComponent } from '../../layout/header/nav/nav.component';
import { InfoSectionComponent } from "../../layout/main/info-section/info-section.component";

@Component({
    selector: 'app-admin-information',
    standalone: true,
    templateUrl: './admin-information.component.html',
    styleUrl: './admin-information.component.css',
    imports: [NavComponent, InfoSectionComponent]
})
export class AdminInformationComponent {}
