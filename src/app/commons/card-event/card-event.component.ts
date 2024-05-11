import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CardeventsService } from './Services/card-events.component.service';

@Component({
  selector: 'app-card-event',
  standalone: true,
  imports: [],
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
  @Input() data: any;
  creatorImage: any = {};
  creatorData: any = {};
  eventImage: any = {};
  categoria: string = '';
  creatorImageUrl: string | undefined;

  // constructor(private sanitizer:DomSanitizer,private cardeventsService: CardeventsService) { }

  // ngOnInit(): void {
  //   const userID = parseInt(localStorage.getItem('id') || '0');
  //   const token = localStorage.getItem('token') || '';

  //   //Consultar Datos de creador de evento
  //   this.cardeventsService.getCreatorData(userID, token, this.data.idUsuario).subscribe((response: any) => {
  //     this.creatorData = response;
  //     this.cardeventsService.getImage(this.creatorData.imageUrl).subscribe((response: Blob) => {
  //       const objectUrl = URL.createObjectURL(response);
  //       this.creatorImage = objectUrl;
  //     });
  //   });
  //   //Consultar imagen de evento
  //   this.cardeventsService.getImage(this.data.imagenUrl).subscribe((response: Blob) => {
  //     const objectUrl = URL.createObjectURL(response);
  //     this.eventImage = objectUrl;
  //   });

    
  //   //Asignar Categoría
  //   this.categoria = this.translateCategory(this.data.categoria);
  // }

  
  // //Pasar Categoría Almacenada a un String Adecuado
  // translateCategory(category: string): string {
  //   switch (category) {
  //     case 'Conferencia':
  //       return 'Conferencia';
  //     case 'Concierto':
  //       return 'Concierto';
  //     case 'Charla':
  //       return 'Charla';
  //     case 'Introduccion':
  //       return 'Introducción';
  //     case 'Debate':
  //       return 'Debate';
  //     case 'Asamblea':
  //       return 'Asamblea';
  //     case 'Espectaculo_de_danzas_o_teatro':
  //       return 'Espectáculo de danzas o teatro';
  //     case 'Seminario':
  //       return 'Seminario';
  //     case 'Congreso':
  //       return 'Congreso';
  //     case 'Curso':
  //       return 'Curso';
  //     case 'Taller':
  //       return 'Taller';
  //     case 'Networking':
  //       return 'Networking';
  //     case 'Actvidad_Cultural':
  //       return 'Actividad Cultural';
  //     case 'Actividad_Deportiva':
  //       return 'Actividad Deportiva';
  //     case 'Proyeccion_de_peliculas':
  //       return 'Proyección de películas';
  //     case 'Religioso_y_Espiritual':
  //       return 'Religioso y Espiritual';
  //     case 'Otro':
  //       return 'Otro';
  //     default:
  //       return 'Categoría no definida';
  //   }
  // }
  

}
