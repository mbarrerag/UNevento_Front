import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { CardCommunityeventsComponent } from '../card-communityevents/card-communityevents.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommunityeventsService, Page } from './Services/communityevents.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-communityevents',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CardCommunityeventsComponent,NgFor,NgIf,FormsModule],
  templateUrl: './communityevents.component.html',
  styleUrl: './communityevents.component.css'
})
export class CommunityeventsComponent {

  constructor(private communityeventsService: CommunityeventsService) { 
    this.events = {} as Page<any>;
    this.userId = parseInt(localStorage.getItem('id') || '0');
    this.token = localStorage.getItem('token') || '';
    this.OptionFilterCategoria="";
  }

  result: any;
  userId: number;
  token: string;

  events: Page<any>;//Manejar las Páginas de los eventos, de 10 en 10
  currentPage: number = 0;//Identificador de la página Actual de los Eventos

  OptionFilterCategoria:string;

  ngOnInit(): void {
    const userID = parseInt(localStorage.getItem('id') || '0');
    const token = localStorage.getItem('token') || '';

    this.loadPage(this.currentPage);//Cargar la Página 0
  }

  loadPage(page: number) {
    this.communityeventsService.getCommunityEvents(this.userId, this.token, page).subscribe(
      data => {
        this.events = data;
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
