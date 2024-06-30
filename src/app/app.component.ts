import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavComponent } from './components/layout/header/nav/nav.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { informationComponent } from './components/Pages/information/information.component';
import { ModalService } from './services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, NavComponent, FooterComponent, RouterOutlet, informationComponent],
})
export class AppComponent implements OnInit {
  title = 'GoodToKnow';
  url: string;
  modal: boolean=false;
  private modalSuscription!: Subscription;


  constructor(private router: Router, private modalService:ModalService) {
    this.url = '';
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.url = event.urlAfterRedirects;
      });
      this.modalSuscription = this.modalService.modalState$.subscribe(
        isOpen => {
          this.modal = isOpen
        }
      )

  }
}
