import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../UserLogin/user-login/Services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[CommonModule,RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
   
  }

  logout(): void {
    this.authService.logout();
  }
}
