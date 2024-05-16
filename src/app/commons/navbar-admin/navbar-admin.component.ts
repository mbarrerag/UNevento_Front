import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AuthService } from '../../UserLogin/user-login/Services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css'
})
export class NavbarAdminComponent {
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  imageUrl: string = '';
  safeImageUrl: SafeUrl = '';
  imgKey: string | null = null; 

  constructor(private authService: AuthService, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.imgKey = localStorage.getItem('imagekey'); 
   
 
  
  

    console.log('imgKey:', this.imgKey);
  }

  isNavbarCollapsed = true;
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  logout(): void {
    this.authService.logout();
  }
}
