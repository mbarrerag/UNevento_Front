import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-faculties',
  standalone: true,
  imports: [],
  templateUrl: './card-faculties.component.html',
  styleUrl: './card-faculties.component.scss'
})
export class CardFacultiesComponent {
  
  @Output() facultySelected = new EventEmitter<string>();

  selectFaculty(facultyName: string) {
    // Emitir el nombre de la facultad seleccionada al componente padre
    console.log(facultyName);
    this.facultySelected.emit(facultyName);
  }
  
}
