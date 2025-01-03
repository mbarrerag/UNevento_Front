import { Component, HostListener,OnInit } from '@angular/core';
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

  ngOnInit() {
    this.isAdmin = parseInt(this.cookieService.get('rol') || '0') === 10;
    this.formattedFaculty="";
    this.updateWelcomeText();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateWelcomeText();
  }

  updateWelcomeText() {
    const welcomeTextElement = document.getElementById('welcome-text');
    if (window.innerWidth < 600) {
      welcomeTextElement!.innerText = 'Sobre Nosotros →';
    } else {
      welcomeTextElement!.innerText = '¡Bienvenido! Somos UNevento, una plataforma web que centraliza y facilita la organización y difusión de eventos académicos, culturales y deportivos en la Universidad Nacional de Colombia, sede Bogotá.';    }
  }

  constructor(private oficialEventService: OficialEventService, private authService: AuthService, private cookieService: CookieService) {}

  handleFacultySelection(facultyName: string) {

    // Do something with the selected faculty, such as making a request or updating state
    this.faculties = facultyName;
    this.formattedFaculty = this.fixFaculties(facultyName); // Asignar el nombre formateado
    this.loadPage(0); // Cargar la primera página al seleccionar una facultad
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    // Calculate the position to scroll to (e.g., 90% of the page)
    const scrollPosition = scrollHeight - clientHeight * 0.1;
    
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth' // Optional: smooth scroll animation
    });
  }

  fixFaculties(faculty: string): string {
    switch(faculty) {
      case 'Facultad_De_Ingenieria': return 'Facultad de Ingeniería';
      case 'Facultad_De_Ciencias': return 'Facultad de Ciencias';
      case 'Facultad_De_Ciencias_Humanas': return 'Facultad de Ciencias Humanas';
      case 'Facultad_De_Ciencias_Economicas': return 'Facultad de Ciencias Económicas';
      case 'Facultad_De_Ciencias_Agrarias': return 'Facultad de Ciencias Agrarias';
      case 'Facultad_De_Ciencias_De_La_Salud': return 'Facultad de Ciencias de la Salud';
      case 'Facultad_De_Medicina': return 'Facultad de Medicina';
      case 'Facultad_De_Enfermeria': return 'Facultad de Enfermeria';
      case 'Facultad_De_Odontologia': return 'Facultad de Odontología';
      case 'Facultad_De_Veterinaria': return 'Facultad de Veterinaria';
      case 'Facultad_De_Derecho': return 'Facultad de Derecho';
      case 'Facultad_De_Artes': return 'Facultad de Artes';
      case 'Leon_De_Greiff': return 'Leon De Greiff';
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
