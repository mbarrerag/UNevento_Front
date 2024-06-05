import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router) { }

  openUserManual() {
    window.open('/usermanual', '_blank');
  }

  openTerms(){
    window.open('/termsofservice', '_blank');
  }

  isUserManualRoute() {
    return this.router.url === '/usermanual';
  }

  isTermsOfConditions(){
    return this.router.url === '/termsofservice';
  }
}
