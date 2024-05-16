import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ModifyEventServiceService } from './Services/modify-event-service.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service'; // Importar CookieService

@Component({
  selector: 'app-modal-modify-event',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './modal-modify-event.component.html',
  styleUrls: ['./modal-modify-event.component.css']
})
export class ModalModifyEventComponent {
  @Input() data: any;
  @Output() closeModalModify = new EventEmitter<void>();
  errorOccurred = false;

  onCloseModify(): void {
    this.closeModalModify.emit();
    this.router.navigate(['/miseventos']);
    this.showSuccessAlert('Evento Modificado', 'El evento ha sido modificado exitosamente')
      .then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
  }

  onCancel() {
    this.closeModalModify.emit();
    this.router.navigate(['/miseventos']);
  }

  fechaValida: boolean = true;
  imageSrc: string | ArrayBuffer | null = null;

  IdEvento: number = 0;
  Titulo: string = '';
  Fecha: string = '';
  Hora: string = '';
  Lugar: string = '';
  Facultad: string = '';
  IdUsuario: number = parseInt(this.cookieService.get('id') || '0'); // Usar CookieService
  token: string = this.cookieService.get('token') || ''; // Usar CookieService
  Aforo: number = 0;
  Categoria: string = '';
  Descripcion: string = '';
  Imagen: any;

  handleImageUpload(event: any): void {
    const file = event.target.files[0];
    this.Imagen = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc = e.target?.result as string || '';
    };
    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
    this.IdEvento = this.data.id;
    this.Titulo = this.data.nombre;
    this.Fecha = this.data.fechaEvento.slice(0, 10);
    this.Hora = this.data.hora;
    this.Lugar = this.data.lugar;
    this.Facultad = this.data.facultad;
    this.Aforo = this.data.capacidad;
    this.Categoria = this.data.categoria;
    this.Descripcion = this.data.descripcion;
    this.imageSrc = this.data.imageUrl;
    this.modifyEventService.getImage(this.data.imagenUrl).subscribe((response: Blob) => {
      this.Imagen = new File([response], this.data.imagenUrl);
      this.handleImageUpload({ target: { files: [this.Imagen] } });
    });
  }

  validarFecha(): void {
    const fechaIngresada = new Date(this.Fecha);
    const fechaIngresadaUTC = Date.UTC(fechaIngresada.getUTCFullYear(), fechaIngresada.getUTCMonth(), fechaIngresada.getUTCDate());
    const fechaActual = new Date();
    const fechaActualUTC = Date.UTC(fechaActual.getUTCFullYear(), fechaActual.getUTCMonth(), fechaActual.getUTCDate());
    this.fechaValida = fechaIngresadaUTC >= fechaActualUTC;
  }

  constructor(
    private modifyEventService: ModifyEventServiceService,
    private router: Router,
    private cookieService: CookieService // Inyectar CookieService
  ) { }
  
  PutModifiedEvent() {
    const fechaEvento = new Date(this.Fecha);
    fechaEvento.setDate(fechaEvento.getDate() + 1);
    const formattedFechaEvento = fechaEvento.toISOString().slice(0, 10);
    
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
    this.modifyEventService.updateEvent(modifiedEvent, this.Imagen, this.IdUsuario, this.token).subscribe((response: any) => {
      console.log(response);
      this.errorOccurred = false;
      this.onCloseModify();
    }, (error: any) => {
      this.errorOccurred = true;
      console.error(error);
    });
  }
  
  private showErrorAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      target:'body',
      confirmButtonText: 'Aceptar',
    });
  }

  private showSuccessAlert(title: string, message: string) {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }
}
