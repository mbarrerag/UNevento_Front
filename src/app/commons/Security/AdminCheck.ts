import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGuard } from './AuthGuard';

@Injectable({
  providedIn: 'root'
})
export class AdminCheck implements CanActivate {
  constructor(private authGuard: AuthGuard, private router: Router) {}

  canActivate(): boolean {
    if (this.authGuard.isAdmin()) {
      this.router.navigate(['**']);
      return false;
    } else {
      return true;
    }
  }
}