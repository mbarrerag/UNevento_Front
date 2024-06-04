import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../commons/navbar-admin/navbar-admin.component';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-usermanual',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NgIf, RouterLink, NgClass],
  templateUrl: './usermanual.component.html',
  styleUrl: './usermanual.component.css'
})
export class UsermanualComponent {
   seccionSeleccionada: string = '';
}
