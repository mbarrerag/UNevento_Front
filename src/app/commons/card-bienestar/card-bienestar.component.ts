import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-bienestar',
  standalone: true,
  imports: [],
  templateUrl: './card-bienestar.component.html',
  styleUrl: './card-bienestar.component.scss'
})
export class CardBienestarComponent {
  
  @Output() BienestarSelected = new EventEmitter<string>();

  selectBienestar(facultyName: string) {
    // Emitir el nombre de la facultad seleccionada al componente padre
    console.log(facultyName);
    this.BienestarSelected.emit(facultyName);
  }
  
}
