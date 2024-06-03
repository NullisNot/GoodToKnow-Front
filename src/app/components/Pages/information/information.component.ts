import { Component } from '@angular/core';
import { InfoContainerComponent } from './components/Info-container/info-container.component';
import { InfoListComponent } from './components/info-list/info-list.component';

interface Information {
    user: Array<any>,
    campusCentro: Array<any>,
    campusNorte: Array<any>, 
    teachers: Array<any>,
    subjects: Array<any>
}

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

    constructor() { 
        this.information = {
            user: [
                { label: "Administrador", value: "Jose Aguilar Arroyo"},
                { label: "Teléfono", value: "+34 688554425"},
                { label: "Email", value: "administracion@goodtoknow.com"},
                { label: "Despacho", value: "camara de comercio-despacho 123"}
            ],
            
            campusCentro: [
                { label: "Campus centro", value: "Camino de Ronda,97,18003.Granada"},
                
            ],

            campusNorte: [
                { label: "Campus norte", value: "Camino de Ronda,97,18003.Granada"}

            ],

            teachers: [
                {   
                    name:"Jorge Manuel García Fernández", 
                    email:"jorgegarcia@goodtoknow.com",
                    linkedin:"linkedn.com/jorgegoodtoknow"
                },
                {   
                    name:"Francisco Javier Gómez Gamarra", 
                    email:"franciscojavier@goodtoknow.com",
                    linkedin:"linkedn.com/franciscojaviergoodtoknow"
                },
                {   
                    name:"Manuel Aguilera Franco", 
                    email:"manuelaguilera@goodtoknow.com",
                    linkedin:"linkedn.com/manuelaguileragoodtoknow"
                },
                {   
                    name:"Carlos Depan Depan",        
                    email:"carlosdepan@goodtoknow.com",
                    linkedin:"linkedn.com/carlosdepangoodtoknow"
                }
            ],
            subjects:[
                {
                    name:"Introducción a la programación",
                },
                {
                    name:"Diseño Interfaces de usuario",
                },
                {
                    name:"Desarrollo multiplataforma",
                },
                {
                    name:"Base de datos",
                },
                {
                    name:"Gestión de conflictos",
                },
                {
                    name:"Masterclass 'Cómo hacer un TFM'",
                }
            ]


            
        }
    }
}
