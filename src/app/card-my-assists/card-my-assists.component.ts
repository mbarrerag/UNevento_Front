import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; 
import { Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CardMyAssistsService } from './Services/card-my-assists.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card-my-assists',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card-my-assists.component.html',
  styleUrl: './card-my-assists.component.css'
})
export class CardMyAssistsComponent {
  @Input() data: any;
  creatorImage: any = {};
  creatorData: any = {};
  eventImage: any = {};
  categoria: string = '';
  faculty: string = '';
  creatorImageUrl: string | undefined;
  idevento: number = 0;

  constructor(private sanitizer: DomSanitizer,
    private cardMyAssistService: CardMyAssistsService,
    private router: Router,
    private cookieService: CookieService) { }


  ngOnInit(): void {
    const userID = parseInt(this.cookieService.get('id') || '0');
    const token = this.cookieService.get('token') || '';
    this.idevento = this.data.id;
    //Consultar Datos de creador de evento
    this.cardMyAssistService.getCreatorData(userID, token, this.data.idUsuario).subscribe((response: any) => {
      this.creatorData = response;
      this.cardMyAssistService.getImage(this.creatorData.imageUrl).subscribe((response: Blob) => {
        const objectUrl = URL.createObjectURL(response);
        this.creatorImage = objectUrl;
      });
    });
    //Consultar imagen de evento
    this.cardMyAssistService.getImage(this.data.imagenUrl).subscribe((response: Blob) => {
      const objectUrl = URL.createObjectURL(response);
      this.eventImage = objectUrl;
    });

    //Asignar Correcta Categoria y En Dado Caso Facultad
    this.categoria = this.translateCategory(this.data.categoria);
    if (this.data.facultad != 'No_Aplica') {
      this.faculty = this.translateFaculty(this.data.facultad);
    }
  }
  navigateToAddAssistant() {
      this.router.navigate(['/assist', this.idevento]);
  }

  navigateToUserProfile() {
    this.router.navigate(['/user', this.data.idUsuario]);
  }

  //Pasar Categoría Almacenada a un String Adecuado
  translateCategory(category: string): string {
    switch (category) {
      case 'Conferencia':
        return 'Conferencia';
      case 'Concierto':
        return 'Concierto';
      case 'Charla':
        return 'Charla';
      case 'Introduccion':
        return 'Introducción';
      case 'Debate':
        return 'Debate';
      case 'Asamblea':
        return 'Asamblea';
      case 'Espectaculo_de_danzas_o_teatro':
        return 'Espectáculo de danzas o teatro';
      case 'Seminario':
        return 'Seminario';
      case 'Congreso':
        return 'Congreso';
      case 'Curso':
        return 'Curso';
      case 'Taller':
        return 'Taller';
      case 'Networking':
        return 'Networking';
      case 'Actvidad_Cultural':
        return 'Actividad Cultural';
      case 'Actividad_Deportiva':
        return 'Actividad Deportiva';
      case 'Actividad_LudicoCreativa':
        return 'Actividad Lúdico-Creativa';
      case 'Actividad_Departamento':
        return 'Actividad de Departamento';
      case 'Proyeccion_de_peliculas':
        return 'Proyección de películas';
      case 'Religioso_y_Espiritual':
        return 'Religioso y Espiritual';
      case 'Otro':
        return 'Otro';
      default:
        return 'Categoría no definida';
    }
  }

  translateFaculty(faculty: string): string {
    switch (faculty) {
      case 'Facultad_De_Ingenieria':
        return 'Facultad de Ingeniería';
      case 'Facultad_De_Ciencias':
        return 'Facultad de Ciencias';
      case 'Facultad_De_Ciencias_Humanas':
        return 'Facultad de Ciencias Humanas';
      case 'Facultad_De_Ciencias_Economicas':
        return 'Facultad de Ciencias Económicas';
      case 'Facultad_De_Ciencias_Agrarias':
        return 'Facultad de Ciencias Agrarias';
      case 'Facultad_De_Ciencias_De_La_Salud':
        return 'Facultad de Medicina';
      case 'Facultad_De_Odontologia':
        return 'Facultad de Odontología';
      case 'Facultad_De_Veterinaria':
        return 'Facultad de Medicina Veterinaria y de Zootecnia';
      case 'Facultad_De_Derecho':
        return 'Facultad de Derecho, Ciencias Politicas y Sociales';
      case 'Facultad_De_Artes':
        return 'Facultad de Artes';
      case 'Bienestar':
        return 'Bienestar';
      case 'Relaciones_Internacionales':
        return 'Relaciones Internacionales';
      case 'Idiomas':
        return 'Idiomas';
      case 'Leon_De_Greiff':
        return 'Auditorio Leon de Greiff';
      case 'No_Aplica':
        return 'Evento Comunitario';
      default:
        return 'Facultad no definida';
    }
  }
}
