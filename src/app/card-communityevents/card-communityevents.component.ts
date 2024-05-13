import { Component, Input } from '@angular/core';
import { on } from 'events';
import { CardCommunityeventsService } from './Services/card-communityevents.service';
import { AddAssistantComponent } from '../add-assistant/add-assistant.component';
import { Router , NavigationExtras} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-communityevents',
  standalone: true,
  imports: [AddAssistantComponent],
  templateUrl: './card-communityevents.component.html',
  styleUrl: './card-communityevents.component.css'
})
export class CardCommunityeventsComponent {
  @Input() data: any;
  creatorImage: any = {};
  creatorData: any = {};
  eventImage: any = {};
  categoria: string = '';
  creatorImageUrl: string | undefined;
  idevento:number = 0;

  constructor(private sanitizer:DomSanitizer,private cardCommunityeventsService: CardCommunityeventsService, private router: Router) { }

  ngOnInit(): void {
    const userID = parseInt(localStorage.getItem('id') || '0');
    const token = localStorage.getItem('token') || '';
    this.idevento = this.data.id;
    //Consultar Datos de creador de evento
    this.cardCommunityeventsService.getCreatorData(userID, token, this.data.idUsuario).subscribe((response: any) => {
      this.creatorData = response;
      this.cardCommunityeventsService.getImage(this.creatorData.imageUrl).subscribe((response: Blob) => {
        const objectUrl = URL.createObjectURL(response);
        this.creatorImage = objectUrl;
      });
    });
    //Consultar imagen de evento
    this.cardCommunityeventsService.getImage(this.data.imagenUrl).subscribe((response: Blob) => {
      const objectUrl = URL.createObjectURL(response);
      this.eventImage = objectUrl;
    });

    
    //Asignar Categoría
    this.categoria = this.translateCategory(this.data.categoria);
  }

  navigateToAddAssistant() {
    this.router.navigate(['/assist', this.idevento]);
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
}
