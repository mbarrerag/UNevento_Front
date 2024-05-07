import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { CardMisEventosComponent } from '../card-mis-eventos/card-mis-eventos.component'
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../commons/footer/footer.component'
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { GetUserInfoService, Page } from './Services/get-user-info.service';

@Component({
  selector: 'app-myevents',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FooterComponent, NavbarComponent, CardMisEventosComponent,NgFor,NgIf],
  templateUrl: './myevents.component.html',
  styleUrl: './myevents.component.css'
})
export class MyeventsComponent implements OnInit {
  
  constructor(private getUserInfoService: GetUserInfoService) {
    this.events = {} as Page<any>;
    this.userId = parseInt(localStorage.getItem('id') || '0');
    this.token = localStorage.getItem('token') || '';
  }
  result: any;
  userId: number;
  token: string;

  events: Page<any>;//Manejar las Páginas de los eventos, de 10 en 10
  currentPage: number = 0;//Identificador de la página Actual de los Eventos

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('id') || '0');
    const token = localStorage.getItem('token') || '';

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
    }
  }

  nextPage() {
    if (this.currentPage < this.events.totalPages - 1) {
      this.currentPage++;
      this.loadPage(this.currentPage);
    }
  }
}
