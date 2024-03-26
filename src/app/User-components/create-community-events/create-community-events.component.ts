import { Component } from '@angular/core';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-community-events',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, RouterLinkActive, CommonModule, RouterOutlet],
  templateUrl: './create-community-events.component.html',
  styleUrl: './create-community-events.component.css'
})
export class CreateCommunityEventsComponent {
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
