import { Component } from '@angular/core';
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
    selector: 'app-user-principal-calendar',
    standalone: true,
    templateUrl: './user-principal-calendar.component.html',
    styleUrl: './user-principal-calendar.component.css',
    imports: [FooterComponent]
})
export class UserPrincipalCalendarComponent {

}
