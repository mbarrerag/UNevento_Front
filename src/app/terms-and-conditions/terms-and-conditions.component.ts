import { Component } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { FooterComponent } from '../commons/footer/footer.component'

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent {

}
