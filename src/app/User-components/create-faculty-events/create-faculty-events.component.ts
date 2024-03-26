import { Component } from '@angular/core';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-faculty-events',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink,RouterLinkActive,CommonModule,RouterOutlet],
  templateUrl: './create-faculty-events.component.html',
  styleUrl: './create-faculty-events.component.css'
})
export class CreateFacultyEventsComponent {

  ///Parte del componente que se encarga de colocar la imagen en interfaz cuando el usuario carga el archivo
  imageSrc: string | ArrayBuffer | null = null;

  handleImageUpload(event: any): void {
    const file = event.target.files[0];//Acceder al archivo cargado por el usuario
    const reader = new FileReader();//API que permite leer archivos
    reader.onload = (e) => {///Controlador que se activará cuando la carga se ha realizado
      this.imageSrc = e.target?.result || null;
    };
    reader.readAsDataURL(file);
  }
}
