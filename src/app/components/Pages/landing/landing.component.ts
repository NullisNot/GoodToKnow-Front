import { Component } from '@angular/core';
import { LoginComponent } from "../../layout/main/login/login.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [LoginComponent, FooterComponent]
})
export class LandingComponent {
  

}
