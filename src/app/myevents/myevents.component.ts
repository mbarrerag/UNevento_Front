import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { CardMisEventosComponent } from '../card-mis-eventos/card-mis-eventos.component'
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../commons/footer/footer.component'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-myevents',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FooterComponent, NavbarComponent, CardMisEventosComponent,NgFor],
  templateUrl: './myevents.component.html',
  styleUrl: './myevents.component.css'
})
export class MyeventsComponent implements OnInit {
  events = [
    {
      name: 'MiEvento1',
      date: '15 de junio',
      time: '15:00',
      place: 'Edificio 404, Salon 216',
      faculty: 'Facultad de Ingeniería',
      type: 'Conferencia',
      max: 100,
      description: 'Mi descripcion'
    },
    {
      name: 'MiEvento2',
      date: '16 de junio',
      time: '9:00',
      place: 'Edificio 405, Salon 310',
      faculty: 'Facultad de Ciencias',
      type: 'Seminario',
      max: 50,
      description: 'Mi descripcion'
    },
    {
      name: 'MiEvento3',
      date: '17 de junio',
      time: '18:00',
      place: 'Edificio 310, Salon 108',
      faculty: 'Facultad de Ciencias Económicas',
      type: 'Grupo de Investigación',
      max: 80,
      description: 'Mi descripcion'
    }
  ]

  ngOnInit(): void {

  }
}
