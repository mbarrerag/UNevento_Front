import { Component } from '@angular/core';
import { OficialEventService } from './Services/home-component.service.component';
import { Page } from '../../myevents/Services/get-user-info.service';
import { CardBienestarComponent } from '../../commons/card-bienestar/card-bienestar.component';
import { CardFacultiesComponent } from '../../commons/card-faculties/card-faculties.component';
import { CommonModule } from '@angular/common';
import { CardEventComponent } from '../../commons/card-event/card-event.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CardBienestarComponent,CardFacultiesComponent,CommonModule, CardEventComponent, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, FooterComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  faculties: string = "";
  title: string = 'UN-evento';
  events: Page<any> = {} as Page<any>; // Manejar las Páginas de los eventos, de 10 en 10
  currentPage: number = 0; // Identificador de la página Actual de los Eventos

  constructor(private oficialEventService: OficialEventService) {}

  handleFacultySelection(facultyName: string) {
    // Do something with the selected faculty, such as making a request or updating state
    this.faculties = facultyName;
    this.loadPage(0); // Cargar la primera página al seleccionar una facultad
  }

  loadPage(page: number) {
    this.oficialEventService.getOficialEvents(this.faculties, page).subscribe(
      data => {
        console.log(data);
        this.events = data;
        this.currentPage = page; // Actualizar la página actual
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  prevPage() {// Retroceder a la Anterior Página de los eventos
    if (this.currentPage > 0) {
      this.loadPage(this.currentPage - 1);
    }
  }

  nextPage() {// Avanzar a la siguiente página de los eventos
    if (this.currentPage < this.events.totalPages - 1) {
      this.loadPage(this.currentPage + 1);
    }
  }
}
