import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './Services/auth/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink,RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
 
  correo: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log('Datos enviados al backend:', { correo: this.correo, password: this.password });
  
    this.authService.login(this.correo, this.password).subscribe(
      (response) => {

        console.log(response)
        console.error('Autenticado correctamente');
        localStorage.setItem('token', response.jwtToken);
        localStorage.setItem('id', response.userId);
        localStorage.setItem('rol', response.rol);
        localStorage.setItem('foto', response.foto);

        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error de inicio de sesión:', error);
        this.showAlert('Error', 'Correo y/o contraseña incorrectos');
      }
    );
  }
  
  private showAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}
  