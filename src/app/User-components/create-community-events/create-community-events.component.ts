import { Component } from '@angular/core';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateComEventService } from './Services/create-com-event.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service'; // Importar CookieService

@Component({
  selector: 'app-create-community-events',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, RouterLinkActive, CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './create-community-events.component.html',
  styleUrls: ['./create-community-events.component.css']
})
export class CreateCommunityEventsComponent {
    imageSrc: string | ArrayBuffer | null = null;
    Titulo: string = '';
    Fecha: string = '';
    Hora: string = '';
    Lugar: string = '';
    Facultad: string = 'No_Aplica';
    IdUsuario: number;
    token: string;
    Aforo: number = 1;
    Categoria: string = '';
    Descripcion: string = '';
    Imagen: any;
    fechaValida: boolean = true;

    handleImageUpload(event: any): void {
      const file = event.target.files[0];
      this.Imagen = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }

    validarFecha(): void {
      const fechaIngresada = new Date(this.Fecha);
      const fechaIngresadaUTC = Date.UTC(fechaIngresada.getUTCFullYear(), fechaIngresada.getUTCMonth(), fechaIngresada.getUTCDate());
  
      const fechaActual = new Date();
      const fechaActualUTC = Date.UTC(fechaActual.getUTCFullYear(), fechaActual.getUTCMonth(), fechaActual.getUTCDate());
  
      this.fechaValida = fechaIngresadaUTC >= fechaActualUTC;
  }

    constructor(private createComEventService: CreateComEventService, private router:Router, private cookieService: CookieService) {
      this.IdUsuario = parseInt(this.cookieService.get('id') || '0');
      this.token = this.cookieService.get('token') || '';
    }
    
    CreateComEvent() {
      const fechaEvento = new Date(this.Fecha);
      fechaEvento.setDate(fechaEvento.getDate() + 1);
      const formattedFechaEvento = fechaEvento.toISOString().slice(0,10);
  
      let newEvent = {
        userID: this.IdUsuario,
        nombre: this.Titulo,
        descripcion: this.Descripcion,
        lugar: this.Lugar,
        categoria: this.Categoria,
        Facultad: this.Facultad,
        tipo:'NO_OFICIAL',
        fechaEvento: new Date(formattedFechaEvento),
        capacidad: this.Aforo,
        hora: this.Hora
      };
  
      let file: File = this.Imagen;
      if (!file) {
        console.log('Ejecutando Petición Creación de Evento Sin Imagen');
        this.createComEventService.CreateComEvent(newEvent, this.token, this.IdUsuario).subscribe(response => {
          console.log(response);
          this.showSuccessAlert('Evento creado', 'El evento ha sido creado exitosamente');
          this.router.navigate(['/miseventos']);
        }, error => {
          this.showErrorAlert('Error', 'No fue posible crear el evento');
          console.error(error);
        });
      } else {
        console.log('Ejecutando Petición Creación de Evento Con Imagen');
        this.createComEventService.CreateComEventPhoto(newEvent, file, this.token, this.IdUsuario).subscribe(response => {
          console.log(response);
          this.showSuccessAlert('Evento creado', 'El evento ha sido creado exitosamente');
          this.router.navigate(['/miseventos']);
        }, error => {
          this.showErrorAlert('Error', 'No fue posible crear el evento');
          console.error(error);
        });
      }
    }
    
  
    private showErrorAlert(title: string, message: string) {
      Swal.fire({
        title: title,
        text: message,
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
    private showSuccessAlert(title: string, message: string) {
      Swal.fire({
        title: title,
        text: message,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    }
}
