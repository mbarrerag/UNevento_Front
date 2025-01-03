import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './Services/auth/auth.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink,RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule,],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
 
  correo: string = '';
  password: string = '';






  constructor(private authService: AuthService, private router: Router,private formBuilder: FormBuilder, private cookieService:CookieService) { }



  
  login() {


    
    // console.log('Datos enviados al backend:', { correo: this.correo, password: this.password });
  
    this.authService.login(this.correo, this.password).subscribe(
      (response) => {

        console.log(response)
        console.error('Autenticado correctamente');
        this.cookieService.set('token', response.jwtToken);
        this.cookieService.set('id', response.userId.toString());
        


        this.router.navigate(['/home']).then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 300); 
        });
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
  