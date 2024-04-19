import { Component } from '@angular/core';
import { FooterComponent } from '../commons/footer/footer.component';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
