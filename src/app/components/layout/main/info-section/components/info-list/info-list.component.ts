import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'info-list',
  standalone: true,
  imports: [
     CommonModule,
     RouterModule
     ],
  templateUrl: './info-list.component.html',
  styleUrl: './info-list.component.css'
})
export class InfoListComponent {
  @Input () title: string | undefined;
  @Input () data: Array<any>=[]
}

  