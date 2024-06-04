

import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { CardMisEventosComponent } from '../card-mis-eventos/card-mis-eventos.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../commons/footer/footer.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { GetUserInfoService, Page } from './Services/get-user-info.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'; // Importar CookieService

@Component({
  selector: 'app-myevents',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FooterComponent, NavbarComponent, CardMisEventosComponent, NgFor, NgIf, FormsModule],
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {

  constructor(private getUserInfoService: GetUserInfoService, private cookieService: CookieService) {
    this.events = {} as Page<any>;
    this.userId = parseInt(this.cookieService.get('id') || '0'); // Usar CookieService
    this.token = this.cookieService.get('token') || ''; // Usar CookieService
    this.OptionFilterCategoria = "";
  }
  
  result: any;
  userId: number;
  token: string;
  events: Page<any>;
  currentPage: number = 0;
  OptionFilterCategoria: string;

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.getUserInfoService.getUserEvents(this.userId, this.token, page).subscribe(
      data => {
        this.events = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPage(this.currentPage);
      window.scrollTo(0, 0);
    }
  }

  nextPage() {
    if (this.currentPage < this.events.totalPages - 1) {
      this.currentPage++;
      this.loadPage(this.currentPage);
      window.scrollTo(0, 0);
    }
  }
}
