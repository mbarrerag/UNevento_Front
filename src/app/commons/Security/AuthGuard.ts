import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../UserLogin/user-login/Services/auth/auth.service'; // Suponiendo que tengas un servicio de autenticación
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService // Inyecta el servicio CookieService
  ) {}

  canActivate(): boolean {
    const token = this.cookieService.get('token'); // Utiliza CookieService para obtener el token
    const isAuthenticated = this.cookieService.get('isAuthenticated'); // Utiliza CookieService para obtener el estado de autenticación

    if (this.authService.isLoggedIn() && isAuthenticated === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
