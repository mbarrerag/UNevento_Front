import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { CardCommunityeventsComponent } from '../card-communityevents/card-communityevents.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-communityevents',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CardCommunityeventsComponent,NgFor],
  templateUrl: './communityevents.component.html',
  styleUrl: './communityevents.component.css'
})
export class CommunityeventsComponent {
  events = [
    {
      Titulo: 'Evento 1',
      Descripcion: 'Descripción del evento 1',
      Fecha: '12/12/2021',
      Hora: '10:00 am',
      Lugar: 'Universidad Nacional de Colombia',
      Aforo: '20 Asistentes',
      Categoria: 'Networking',
      User: 'Facultad de Artes'
    },
    {
      Titulo: 'Evento 2',
      Descripcion: 'Descripción del evento 2',
      Fecha: '13/12/2021',
      Hora: '11:00 am',
      Lugar: 'Universidad de Los Andes',
      Aforo: '30 Asistentes',
      Categoria: 'Conferencia',
      User: 'Facultad de Ciencias'
    },
    {
      Titulo: 'Evento 3',
      Descripcion: 'Descripción del evento 3',
      Fecha: '14/12/2021',
      Hora: '12:00 pm',
      Lugar: 'Universidad Javeriana',
      Aforo: '40 Asistentes',
      Categoria: 'Seminario',
      User: 'Facultad de Medicina'
    },
    {
      Titulo: 'Evento 1',
      Descripcion: 'Descripción del evento',
      Fecha: '12/12/2021',
      Hora: '10:00 am',
      Lugar: 'Universidad Nacional de Colombia',
      Aforo: '20 Asistentes',
      Categoria: 'Networking',
      User: 'Facultad de Artes'
    },
    {
      Titulo: 'Evento 100',
      Descripcion: 'Descripción del evento',
      Fecha: '12/12/2021',
      Hora: '10:00 am',
      Lugar: 'Universidad Nacional de Colombia',
      Aforo: '20 Asistentes',
      Categoria: 'Networking',
      User: 'Facultad de Artes'
    },
    {
      Titulo: 'Evento 100',
      Descripcion: 'Descripción del evento',
      Fecha: '12/12/2021',
      Hora: '10:00 am',
      Lugar: 'Universidad Nacional de Colombia',
      Aforo: '20 Asistentes',
      Categoria: 'Networking',
      User: 'Facultad de Artes'
    },
    {
      Titulo: 'Evento 100',
      Descripcion: 'Descripción del evento',
      Fecha: '12/12/2021',
      Hora: '10:00 am',
      Lugar: 'Universidad Nacional de Colombia',
      Aforo: '20 Asistentes',
      Categoria: 'Networking',
      User: 'Facultad de Artes'
    },
    {
      Titulo: 'Evento 100',
      Descripcion: 'Descripción del evento',
      Fecha: '12/12/2021',
      Hora: '10:00 am',
      Lugar: 'Universidad Nacional de Colombia',
      Aforo: '20 Asistentes',
      Categoria: 'Networking',
      User: 'Facultad de Artes'
    },
    {
      Titulo: 'Evento 100',
      Descripcion: 'Descripción del evento',
      Fecha: '12/12/2021',
      Hora: '10:00 am',
      Lugar: 'Universidad Nacional de Colombia',
      Aforo: '20 Asistentes',
      Categoria: 'Networking',
      User: 'Facultad de Artes'
    },
    {
      Titulo: 'Evento 100',
      Descripcion: 'Descripción del evento',
      Fecha: '12/12/2021',
      Hora: '10:00 am',
      Lugar: 'Universidad Nacional de Colombia',
      Aforo: '20 Asistentes',
      Categoria: 'Networking',
      User: 'Facultad de Artes'
    }
  ];

}
