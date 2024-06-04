import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import * as XLSX from 'xlsx';
interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
}

@Component({
  selector: 'app-modal-my-event-attendance',
  standalone: true,
  imports: [NgFor],
  templateUrl: './modal-my-event-attendance.component.html',
  styleUrl: './modal-my-event-attendance.component.css'
})

export class ModalMyEventAttendanceComponent {
  @Input() data: any;//Lista Con Los Usuarios que van a Asistir al Evento
  @Output() closeModalAttendance = new EventEmitter<void>();

  @Input() Titulo: string = '';

  onClose(){
    this.closeModalAttendance.emit();
      
  }

  //Método para descargar el archivo Excel de los asistentes al evento
  descargarExcel(): void {
    const datosTransformados = this.data.map((usuario: Usuario) => ({
      'Nombre del Usuario': usuario.nombre,
      'Apellido del Usuario': usuario.apellido,
      'Correo Electronico del Usuario': usuario.correo
    }));
  
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(datosTransformados);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Asistentes');
    XLSX.writeFile(wb, 'UNevento - Asistentes a Evento - '+this.Titulo+'.xlsx');
  }

}
