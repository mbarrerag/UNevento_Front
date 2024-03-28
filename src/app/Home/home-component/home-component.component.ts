import { Component } from '@angular/core';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardEventComponent } from '../../commons/card-event/card-event.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { CardFacultiesComponent } from '../../commons/card-faculties/card-faculties.component';



@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [   CardFacultiesComponent,CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, CardEventComponent, FooterComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  title = 'UN-evento';

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const category = target.value;
    console.log("Categoría seleccionada:", category);
  }
}
