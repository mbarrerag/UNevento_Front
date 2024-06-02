import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../commons/navbar-admin/navbar-admin.component';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component';

@Component({
  selector: 'app-usermanual',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './usermanual.component.html',
  styleUrl: './usermanual.component.css'
})
export class UsermanualComponent {

}
