import { Component } from '@angular/core';
import { ModalDeleteEventComponent } from '../modal-delete-event/modal-delete-event.component';
import { Input } from '@angular/core';

import { NgIf } from '@angular/common';
import { ModalModifyEventComponent } from '../modal-modify-event/modal-modify-event.component';
import { CardMisEventosService } from './Services/card-mis-eventos.service';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';



@Component({
  selector: 'app-card-mis-eventos',
  standalone: true,
  imports: [ModalDeleteEventComponent, NgIf, ModalModifyEventComponent],
  templateUrl: './card-mis-eventos.component.html',
  styleUrl: './card-mis-eventos.component.css'
})

export class CardMisEventosComponent {
  @Input() data: any;

  
  categoria: string = '';
  Facultad: string = '';
  showModalDelete = false;
  eventImage: any = {};

  constructor(private cardMisEventosService: CardMisEventosService,private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.categoria = this.translateCategory(this.data.categoria);
    this.Facultad = this.translateFaculty(this.data.facultad);
    this.cardMisEventosService.getImage(this.data.imagenUrl).subscribe((response: Blob) => {
      const objectUrl = URL.createObjectURL(response);
      this.eventImage = objectUrl;
    });

  }

  onOpenModalDelete(): void {
    this.showModalDelete = true;
  }

  onCloseModalDelete(): void {    
    this.showModalDelete = false;
  }

  showModalModify = false;

  onOpenModalModify(): void {
    const modal = this.el.nativeElement.querySelector('.ModificarEvento');
    this.renderer.appendChild(document.body, modal);
    // Aquí va el resto de tu código para abrir el modal
  }

  onCloseModalModify(): void {
    this.showModalModify = false;
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
      case 'No_Aplica':
        return 'Evento Comunitario';
      default:
        return 'Facultad no definida';
    }
  }
}
