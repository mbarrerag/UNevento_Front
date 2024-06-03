import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../commons/navbar-admin/navbar-admin.component';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usermanual',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NgIf, RouterLink],
  templateUrl: './usermanual.component.html',
  styleUrl: './usermanual.component.css'
})
export class UsermanualComponent {
   seccionSeleccionada: string = '';
}
