import { Component } from '@angular/core';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateFacultyEventService } from './Services/CreateFacEvent/create-faculty-event.service';
import Swal from 'sweetalert2';
import { response } from 'express';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-create-faculty-events',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink,RouterLinkActive,CommonModule,RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './create-faculty-events.component.html',
  styleUrl: './create-faculty-events.component.css'
})
export class CreateFacultyEventsComponent {

  ///Parte del componente que se encarga de colocar la imagen en interfaz cuando el usuario carga el archivo
  imageSrc: string | ArrayBuffer | null = null;
  fechaValida: boolean = true; // Propiedad para controlar la validez de la fecha

  handleImageUpload(event: any): void {
    const file = event.target.files[0];//Acceder al archivo cargado por el usuario
    this.Imagen = file;
    const reader = new FileReader();//API que permite leer archivos
    reader.onload = (e) => {///Controlador que se activará cuando la carga se ha realizado
      this.imageSrc = e.target?.result || null;
    };
    reader.readAsDataURL(file);
  }

  Titulo: string = '';
  Fecha: string = '';
  Hora: string = '';
  Lugar: string = '';
  Facultad: string = '';
  IdUsuario: number = parseInt(this.cookieService.get('id') || '0');
  token: string = this.cookieService.get('token') || '';
  Aforo: number = 1;
  Categoria: string = '';
  Descripcion: string = '';
  Imagen: any; // Initialize the "Imagen" property

  // Función de validación para la fecha
  validarFecha(): void {
    const fechaIngresada = new Date(this.Fecha);
    const fechaIngresadaUTC = Date.UTC(fechaIngresada.getUTCFullYear(), fechaIngresada.getUTCMonth(), fechaIngresada.getUTCDate());

    const fechaActual = new Date();
    const fechaActualUTC = Date.UTC(fechaActual.getUTCFullYear(), fechaActual.getUTCMonth(), fechaActual.getUTCDate());

    this.fechaValida = fechaIngresadaUTC >= fechaActualUTC;
}

  constructor(private createFacEventService: CreateFacultyEventService, private router:Router,  private cookieService: CookieService) { }
  CreateFacEvent(){
    
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
      tipo:'OFICIAL',
      fechaEvento: new Date(formattedFechaEvento),
      capacidad: this.Aforo,
      hora: this.Hora
    };

    let file:File=this.Imagen;
    if (!file) {//Caso En el que no se envía Imagen
      console.log('Ejecutando Petición Creación de Evento Sin Imagen');
      this.createFacEventService.CreateFacEvent(newEvent, this.token, this.IdUsuario).subscribe(response => {
        console.log(response);
        this.showSuccessAlert('Evento creado', 'El evento ha sido creado exitosamente');
        this.router.navigate(['/miseventos']);
      }, error => {
        this.showErrorAlert('Error', 'No fue posible crear el evento');
        console.error(error);
      });
    } else { //Caso en el que se envía Imagen
      console.log('Ejecutando Petición Creación de Evento Con Imagen');
      this.createFacEventService.CreateFacEventPhoto(newEvent, file, this.token, this.IdUsuario).subscribe(response => {
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
      // Other available icons: 'success', 'warning', 'info', 'question'
      // Example usage: icon: 'success'
    });
  }
  private showSuccessAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      // Other available icons: 'success', 'warning', 'info', 'question'
      // Example usage: icon: 'success'
    });
  }
}
