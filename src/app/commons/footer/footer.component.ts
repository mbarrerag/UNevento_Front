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

  openFrequentlyAskedQuestions() {
    window.open('/frequently-asked-questions', '_blank');
  }

  openContact() {
    window.open('/contact', '_blank');
  }

  isUserManualRoute() {
    return this.router.url === '/usermanual';
  }

  isTermsOfConditions(){
    return this.router.url === '/termsofservice';
  }

  isFrequentlyAskedQuestions() {
    return this.router.url === '/frequently-asked-questions';
  }
}
