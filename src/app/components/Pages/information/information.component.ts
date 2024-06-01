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
    public information: Object= {
        user: [
            { label: "Administrador", value: "Jose Aguilar Arroyo"},
            { label: "Teléfono", value: "+34 688554425"},
            { label: "Email", value: "administracion@goodtoknow.com"},
            { label: "Despacho", value: "camara de comercio-despacho 123"}
          ],
        
        campusCentro: [
            { label: "Campus centro", value: "Camino de Ronda,97,18003.Granada"}
        ]
    }
    /**constructor() { 
        this.information ={
            user: [
                { label: "Administrador", value: "Jose Aguilar Arroyo"},
                { label: "Teléfono", value: "+34 688554425"},
                { label: "Email", value: "administracion@goodtoknow.com"},
                { label: "Despacho", value: "camara de comercio-despacho 123"}
              ],
            
            campusCentro: [
                { label: "Campus centro", value: "Camino de Ronda,97,18003.Granada"}
            ]
        }
    }*/

}
