import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../UserLogin/user-login/Services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  imageUrl: string = '';
  safeImageUrl: SafeUrl = '';
  imgKey: string | null = null; 

  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.imgKey = this.cookieService.get('imagekey'); 

    if (this.imgKey) {
      this.imageUrl = this.imgKey;
      this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
    }

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
