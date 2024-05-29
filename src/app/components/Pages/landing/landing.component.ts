import { Component } from '@angular/core';
import { LoginComponent } from "../../layout/main/login/login.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [LoginComponent]
})
export class LandingComponent {
  

}
