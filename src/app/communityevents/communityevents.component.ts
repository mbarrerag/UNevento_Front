import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { CardCommunityeventsComponent } from '../card-communityevents/card-communityevents.component';
import { CardPremiumEventsComponent } from '../card-premium-events/card-premium-events.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommunityeventsService, Page } from './Services/communityevents.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'; // Importar CookieService

@Component({
  selector: 'app-communityevents',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardCommunityeventsComponent, CardPremiumEventsComponent, NgFor, NgIf, FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './communityevents.component.html',
  styleUrl: './communityevents.component.css'
})
export class CommunityeventsComponent {

  constructor(
    private communityeventsService: CommunityeventsService,
    private cookieService: CookieService // Inyectar CookieService
  ) { 
    this.events = {} as Page<any>;
    this.userId = parseInt(this.cookieService.get('id') || '0');
    this.token = this.cookieService.get('token') || '';
    this.OptionFilterCategoria="";
    this.premiumevents = [
      {
        nombre: 'Evento 1',
        descripcion: 'Descripción del Evento 1',
        fechaEvento: new Date().toISOString(),
        hora: '10:00',
        lugar: 'Lugar 1',
        capacidad: 100,
        categoria: 'Conferencia',
        nombrecreador: 'Creador 1'
      },
      {
        nombre: 'Evento 2',
        descripcion: 'Descripción del Evento 2',
        fechaEvento: new Date().toISOString(),
        hora: '11:00',
        lugar: 'Lugar 2',
        capacidad: 200,
        categoria: 'Seminario',
        nombrecreador: 'Creador 2'
      },
      {
        nombre: 'Evento 3',
        descripcion: 'Descripción del Evento 3',
        fechaEvento: new Date().toISOString(),
        hora: '12:00',
        lugar: 'Lugar 3',
        capacidad: 300,
        categoria: 'Taller',
        nombrecreador: 'Creador 3'
      },
      {
        nombre: 'Evento 4',
        descripcion: 'Descripción del Evento 4',
        fechaEvento: new Date().toISOString(),
        hora: '13:00',
        lugar: 'Lugar 4',
        capacidad: 400,
        categoria: 'Webinar',
        nombrecreador: 'Creador 4'
      },
      {
        nombre: 'Evento 5',
        descripcion: 'Descripción del Evento 5',
        fechaEvento: new Date().toISOString(),
        hora: '14:00',
        lugar: 'Lugar 5',
        capacidad: 500,
        categoria: 'Conferencia',
        nombrecreador: 'Creador 5'
      },
      {
        nombre: 'Evento 6',
        descripcion: 'Descripción del Evento 6',
        fechaEvento: new Date().toISOString(),
        hora: '15:00',
        lugar: 'Lugar 6',
        capacidad: 600,
        categoria: 'Seminario',
        nombrecreador: 'Creador 6'
      },
      {
        nombre: 'Evento 7',
        descripcion: 'Descripción del Evento 7',
        fechaEvento: new Date().toISOString(),
        hora: '16:00',
        lugar: 'Lugar 7',
        capacidad: 700,
        categoria: 'Taller',
        nombrecreador: 'Creador 7'
      },
      {
        nombre: 'Evento 8',
        descripcion: 'Descripción del Evento 8',
        fechaEvento: new Date().toISOString(),
        hora: '17:00',
        lugar: 'Lugar 8',
        capacidad: 800,
        categoria: 'Webinar',
        nombrecreador: 'Creador 8'
      }
    ];
  }

  result: any;
  userId: number;
  token: string;

  events: Page<any>;//Manejar las Páginas de los eventos, de 10 en 10

  premiumevents: any[]//Eventos Premium
  
  currentPage: number = 0;//Identificador de la página Actual de los Eventos

  OptionFilterCategoria:string;

  ngOnInit(): void {
    const userID = parseInt(this.cookieService.get('id') || '0');
    const token = this.cookieService.get('token') || '';

    this.loadPage(this.currentPage);//Cargar la Página 0
  }

  loadPage(page: number) {
    this.communityeventsService.getCommunityEvents(this.userId, this.token, page).subscribe(
      data => {
        this.events = data;
        console.log(data);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  prevPage() {//Retroceder a la Anterior Página de los eventos
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPage(this.currentPage);
      window.scrollTo(0, 0);
    }
  }

  nextPage() {//Avanzar a la siguiente página de los eventos
    if (this.currentPage < this.events.totalPages - 1) {
      this.currentPage++;
      this.loadPage(this.currentPage);
      window.scrollTo(0, 0);
    }
  }
}
