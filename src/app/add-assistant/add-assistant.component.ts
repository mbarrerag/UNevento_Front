import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { GetParticularEventoService } from './Services/get-particular-evento.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';

@Component({
  selector: 'app-add-assistant',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './add-assistant.component.html',
  styleUrl: './add-assistant.component.css'
})
export class AddAssistantComponent implements OnInit {
  

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
  imageUrl: string = '';
  eventImage: any = {};
  idEvento: number = 0;

  constructor(private getParticularEventService: GetParticularEventoService,
    private router: Router,private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Obtener el id del evento a partír de la ruta
    this.route.paramMap.subscribe(params => {
      const idEvento = params.get('idEvento');
      this.idEvento = idEvento ? +idEvento : 0;
    });

    this.getParticularEventService.getParticularEvent(this.IdUsuario, this.token, this.idEvento || 57).subscribe(
      (response: any) => {
        console.log(response)
        this.nombreEvento = response.nombre;
        this.descripcion = response.descripcion;
        this.lugar = response.lugar;
        this.categoria = response.categoria.replace(/_/g,' ');
        this.facultad = response.Facultad.replace(/_/g,' ');
        this.fecha = (response.fechaEvento.split('T'))[0];
        this.hora = response.hora;
        this.maxAsistentes = response.capacidad;
        this.tipoEvento = response.tipo.replace(/_/g,' ');      
        this.getParticularEventService.getImage(response.imageUrl).subscribe((image: Blob) => {
          const objectUrl = URL.createObjectURL(image);
          this.eventImage = objectUrl;
        });
      }, () => {
        Swal.fire('Error',
          'Parece que este evento no está disponible',
          'error'
        )
      }
    );
  }

  asistir(): void {
    Swal.fire({
      title: 'Confirmación Asistencia',
      text: '¿Está seguro que asistirá a este evento?',
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      showConfirmButton: true,
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.getParticularEventService.assistEvent(this.IdUsuario, this.token, this.idEvento || 57).subscribe(
          () => {
            Swal.fire({
              title: 'Confirmación Exitosa',
              text: 'Se ha confirmado su asistencia a este evento',
              icon: 'success'  
            });
            this.router.navigate(['/home'])
          }
        );
      }
    });
  }
}
