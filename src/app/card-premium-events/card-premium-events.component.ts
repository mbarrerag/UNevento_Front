import { Component, Input } from '@angular/core';
import { CardPremiumEventsService } from './Services/card-premium-events.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-card-premium-events',
  standalone: true,
  templateUrl: './card-premium-events.component.html',
  styleUrls: ['./card-premium-events.component.css']
})
export class CardPremiumEventsComponent {

  constructor(
    private sanitizer: DomSanitizer,
    private cardPremiumEventsService: CardPremiumEventsService,
    private cookieService: CookieService
  ) { }

  @Input() data: any;
  creatorImage: any = {};
  creatorData: any = {};
  eventImage: any = {};
  categoria: string = '';
  creatorImageUrl: string | undefined;

  ngOnInit(): void {
    const userID = parseInt(this.cookieService.get('id') || '0');
    const token = this.cookieService.get('token') || '';

    //Asignar Categoría
    this.categoria = this.translateCategory(this.data.categoria);

    // this.cardPremiumEventsService.getCreatorData(userID, token, this.data.idUsuario).subscribe((response: any) => {
    //   this.creatorData = response;
    //   this.cardPremiumEventsService.getImage(this.creatorData.imageUrl).subscribe((response: Blob) => {
    //     const objectUrl = URL.createObjectURL(response);
    //     this.creatorImage = objectUrl;
    //   });
    // });

    //Consultar imagen de evento
    // this.cardPremiumEventsService.getImage(this.data.imagenUrl).subscribe((response: Blob) => {
    //   const objectUrl = URL.createObjectURL(response);
    //   this.eventImage = objectUrl;
    // });
  }


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
}
