import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { GetParticularEventoService } from './Services/get-particular-evento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-assistant',
  standalone: true,
  imports: [],
  templateUrl: './add-assistant.component.html',
  styleUrl: './add-assistant.component.css'
})
export class AddAssistantComponent implements OnInit {
  @Input() data: any = {idEvent: 1};

  nombreEvento: string = "Nombre del Evento";
  descripcion: string = "Descripción del evento";
  lugar: string = "Lugar del evento";
  categoria: string = "Categoría del evento";
  facultad: string = "Facultad";
  fecha: string = "Fecha del evento";
  maxAsistentes: number = 100;
  hora: string = "Hora del evento";
  tipoEvento: string = "Tipo de Evento";
  IdUsuario: number = parseInt(localStorage.getItem('id') || '0');
  token: string = localStorage.getItem('token') || '';

  constructor(private getParticularEventService: GetParticularEventoService) { }

  ngOnInit(): void {

    this.getParticularEventService.getParticularEvent(this.IdUsuario, this.token, this.data.idEvento).subscribe(
      (response: any) => {
        this.nombreEvento = response.nombreEvento;
        this.descripcion = response.descripcion;
        this.lugar = response.lugar;
        this.categoria = response.categoria;
        this.facultad = response.facultad;
        this.fecha = response.fecha;
        this.hora = response.hora;
        this.maxAsistentes = response.maxAsistentes;
        this.tipoEvento = response.tipoEvento;
      }, () => {
        Swal.fire('Error',
          'Parece que este evento no está disponible',
          'error'
        )
      }
    );
  }

  asistir(): void {

  }
}
