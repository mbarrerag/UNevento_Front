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

@Component({
  selector: 'app-create-community-events',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, RouterLinkActive, CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './create-community-events.component.html',
  styleUrl: './create-community-events.component.css'
})
export class CreateCommunityEventsComponent {
    ///Parte del componente que se encarga de colocar la imagen en interfaz cuando el usuario carga el archivo
    imageSrc: string | ArrayBuffer | null = null;

    //Datos Par enviar solicitud post al back
    Titulo: string = '';
    Fecha: string = '';
    Hora: string = '';
    Lugar: string = '';
    Facultad: string = 'No_Aplica';
    IdUsuario: number = parseInt(localStorage.getItem('id') || '0');
    token: string = localStorage.getItem('token') || '';
    Aforo: number = 1;
    Categoria: string = '';
    Descripcion: string = '';
    Imagen: any; // Initialize the "Imagen" property

    fechaValida: boolean = true; // Propiedad para controlar la validez de la fecha

    //Método para cargar la imagen
    handleImageUpload(event: any): void {
      const file = event.target.files[0];//Acceder al archivo cargado por el usuario
      this.Imagen = file;
      const reader = new FileReader();//API que permite leer archivos
      reader.onload = (e) => {///Controlador que se activará cuando la carga se ha realizado
        this.imageSrc = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }

    //Validar una fecha Igual o Superior a la del Día de Hoy
    validarFecha(): void {
      const fechaIngresada = new Date(this.Fecha);
      const fechaIngresadaUTC = Date.UTC(fechaIngresada.getUTCFullYear(), fechaIngresada.getUTCMonth(), fechaIngresada.getUTCDate());
  
      const fechaActual = new Date();
      const fechaActualUTC = Date.UTC(fechaActual.getUTCFullYear(), fechaActual.getUTCMonth(), fechaActual.getUTCDate());
  
      this.fechaValida = fechaIngresadaUTC >= fechaActualUTC;
  }

    constructor(private createComEventService: CreateComEventService, private router:Router) { }
    
    CreateComEvent(){
    
      const formattedFechaEvento = this.Fecha.split('/').join('-');
  
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
  
      let file:File=this.Imagen;
      if (!file) {//Caso En el que no se envía Imagen
        console.log('Ejecutando Petición Creación de Evento Sin Imagen');
        this.createComEventService.CreateComEvent(newEvent, this.token, this.IdUsuario).subscribe(response => {
          console.log(response);
          this.showSuccessAlert('Evento creado', 'El evento ha sido creado exitosamente');
          this.router.navigate(['/miseventos']);
        }, error => {
          this.showErrorAlert('Error', 'No fue posible crear el evento');
          console.error(error);
        });
      } else { //Caso en el que se envía Imagen
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
