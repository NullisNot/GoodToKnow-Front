import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from '../../layout/main/info-section/info-section.component';
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
    selector: 'app-information',
    standalone: true,
    templateUrl: './information.component.html',
    styleUrl: './information.component.css',
    imports: [InfoSectionComponent, CommonModule, FooterComponent]
})
export class informationComponent {}
