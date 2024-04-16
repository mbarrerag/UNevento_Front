import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core'
import { EventEmitter } from '@angular/core';
import { ModifyEventServiceService } from './Services/modify-event-service.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-modify-event',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './modal-modify-event.component.html',
  styleUrl: './modal-modify-event.component.css'
})
export class ModalModifyEventComponent {
  @Input() data: any;
  @Output() closeModalModify = new EventEmitter<void>();


  onCloseModify(): void {
    this.closeModalModify.emit();
    this.router.navigate(['/miseventos']);
    location.reload();
  }

  onCancel(){
    this.closeModalModify.emit();
    this.router.navigate(['/miseventos']);
  }


  fechaValida: boolean = true; // Propiedad para controlar la validez de la fecha
  imageSrc: string  = "";

  IdEvento: number = 0;
  Titulo: string = '';
  Fecha: string = '';
  Hora: string = '';
  Lugar: string = '';
  Facultad: string = '';
  IdUsuario: number = parseInt(localStorage.getItem('id') || '0');
  token: string = localStorage.getItem('token') || '';
  Aforo: number = 0;
  Categoria: string = '';
  Descripcion: string = '';
  Imagen: any; // Initialize the "Imagen" property

  handleImageUpload(event: any): void {
    const file = event.target.files[0];//Acceder al archivo cargado por el usuario
    this.Imagen = file;
    const reader = new FileReader();//API que permite leer archivos
    reader.onload = (e) => {///Controlador que se activará cuando la carga se ha realizado
      this.imageSrc = e.target?.result as string || '';
    };
    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
    this.IdEvento = this.data.id;
    this.Titulo = this.data.nombre;
    this.Fecha = this.data.fechaEvento.slice(0,10);
    this.Hora = this.data.hora;
    this.Lugar = this.data.lugar;
    this.Facultad = this.data.facultad;
    this.Aforo = this.data.capacidad;
    this.Categoria = this.data.categoria;
    this.Descripcion = this.data.descripcion;
    this.imageSrc = this.data.imagenUrl;
    this.modifyEventService.getImage(this.data.imagenUrl).subscribe((response: Blob) => {
      this.Imagen = new File([response], this.imageSrc);
      this.handleImageUpload({ target: { files: [this.Imagen] } });
      console.log(this.Imagen);
    });
  }

  // Función de validación para la fecha
  validarFecha(): void {
    const fechaIngresada = new Date(this.Fecha);
    const fechaIngresadaUTC = Date.UTC(fechaIngresada.getUTCFullYear(), fechaIngresada.getUTCMonth(), fechaIngresada.getUTCDate());

    const fechaActual = new Date();
    const fechaActualUTC = Date.UTC(fechaActual.getUTCFullYear(), fechaActual.getUTCMonth(), fechaActual.getUTCDate());
    

    this.fechaValida = fechaIngresadaUTC >= fechaActualUTC;
}

  constructor(private modifyEventService: ModifyEventServiceService, private router:Router) { }
  
  PutModifiedEvent(){
    
    const formattedFechaEvento = this.Fecha.slice(0,10).split('/').join('-');
    

    let modifiedEvent = {
      id: this.IdEvento,
      nombre: this.Titulo,
      descripcion: this.Descripcion,
      lugar: this.Lugar,
      categoria: this.Categoria,
      Facultad: this.Facultad,
      fechaEvento: formattedFechaEvento,
      capacidad: this.Aforo,
      hora: this.Hora
    };
    console.log('Ejecutando Petición Modificación de Evento', modifiedEvent);
    this.modifyEventService.updateEvent(modifiedEvent, this.Imagen,this.IdUsuario, this.token).subscribe((response: any) => {
      console.log(response);
      this.showSuccessAlert('Evento Modificado', 'El evento ha sido modificado exitosamente');
      this.router.navigate(['/miseventos']);
      
    }, (error: any) => {
      this.showErrorAlert('Error', 'No fue posible modificar el evento');
      console.error(error);
    });
    this.onCloseModify();
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
