

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../UserLogin/user-login/Services/auth/auth.service'; // Suponiendo que tengas un servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
const token = localStorage.getItem('token');
const autenticación = localStorage.getItem('isAuthenticated');
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
