import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'info-container',
  standalone: true,
  imports: [
     CommonModule,
     RouterModule,
     FormsModule],
  templateUrl: './info-container.component.html',
  styleUrl: './info-container.component.css'
})
export class InfoContainerComponent {
  
}

  