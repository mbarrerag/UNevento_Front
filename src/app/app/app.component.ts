import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardEventComponent } from './commons/card-event/card-event.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,HomeComponentComponent, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent,CardEventComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
