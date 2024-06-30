import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SessionService } from '../../../../services/session.service';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  showOptions: boolean = false;
  
  constructor(public sessionService: SessionService, private modalService: ModalService){
  }

  ngOnInit(): void {
    this.sessionService.isLogged();
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  openInformationmodal() {
    this.modalService.openModal()
  }
}
