import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';

@Component({
  selector: 'app-create-events',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink,RouterLinkActive,CommonModule,RouterOutlet],
  templateUrl: './create-events.component.html',
  styleUrl: './create-events.component.css'
})
export class CreateEventsComponent {

}
