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
import { ToggleIFrameComponent } from '../../toggle-iframe/toggle-iframe.component';
import { NavbarAdminComponent } from '../../commons/navbar-admin/navbar-admin.component';
import { AuthService } from '../../UserLogin/user-login/Services/auth/auth.service';
import { NgIf } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CardBienestarComponent,CardFacultiesComponent,CommonModule, CardEventComponent, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, FooterComponent, NavbarAdminComponent, NgIf, ToggleIFrameComponent],

  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  formattedFaculty: string = ""; // Nueva propiedad para almacenar el nombre formateado de la facultad
  faculties: string = "";
  title: string = 'UN-evento';
  events: Page<any> = {} as Page<any>; // Manejar las Páginas de los eventos, de 10 en 10
  currentPage: number = 0; // Identificador de la página Actual de los Eventos
  fixFaculty: string = '';
  isAdmin: boolean = parseInt(this.cookieService.get('rol') || '0') === 10;




  constructor(private oficialEventService: OficialEventService, private authService: AuthService, private cookieService: CookieService) {}

  handleFacultySelection(facultyName: string) {
    // Do something with the selected faculty, such as making a request or updating state
    this.faculties = facultyName;
    this.formattedFaculty = this.fixFaculties(facultyName); // Asignar el nombre formateado
    this.loadPage(0); // Cargar la primera página al seleccionar una facultad
  }

  fixFaculties(faculty: string): string {
    switch(faculty) {
      case 'Facultad_De_Ingenieria': return 'Facultad de Ingeniería';
      case 'Facultad_De_Ciencias': return 'Facultad de Ciencias';
      case 'Facultad_De_Ciencias_Humanas': return 'Facultad de Ciencias Humanas';
      case 'Facultad_De_Ciencias_Economicas': return 'Facultad de Ciencias Económicas';
      case 'Facultad_De_Ciencias_Agrarias': return 'Facultad de Ciencias Agrarias';
      case 'Facultad_De_Ciencias_De_La_Salud': return 'Facultad de Ciencias de la Salud';
      case 'Facultad_De_Odontologia': return 'Facultad de Odontología';
      case 'Facultad_De_Veterinaria': return 'Facultad de Veterinaria';
      case 'Facultad_De_Derecho': return 'Facultad de Derecho';
      case 'Facultad_De_Artes': return 'Facultad de Artes';
      case 'Bienestar': return 'Bienestar';
      case 'Idiomas': return 'Idiomas';
      case 'Relaciones_Internacionales': return 'Relaciones Internacionales';
      case 'No_Aplica': return 'No Aplica';
      default: return faculty;
    }
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

  //Consultar si está loggeado o no
  isLoggedin(): boolean{
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

}
