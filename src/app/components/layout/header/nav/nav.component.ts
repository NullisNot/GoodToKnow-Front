import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  showOptions: boolean = false;
  

  constructor(public sessionService: SessionService){
  }

    ngOnInit(): void {
    this.sessionService.isLogged();
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
