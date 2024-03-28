import { Component } from '@angular/core';
import { serviceSingUp } from './Sevice/serviceSingUp';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sing-up-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sing-up-user.component.html',
  styleUrl: './sing-up-user.component.css'
})

export class SingUpUserComponent {
  userData = {
    "nombre" : "",
    "apellido": "",
    "correo" : "",
    "contrasena" : ""
  };


  confirmPassword = '';
  acceptTerms = false;
  showConfirmPassword = false;
  showPassword = false;
  constructor(private serviceSingUp: serviceSingUp) {}

  togglePasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
}

togglePasswordVisibility2() {
  this.showPassword = !this.showPassword;
}


  submitForm() {
    if (this.userData.contrasena !== this.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    if (!this.acceptTerms) {
      console.error('Debes aceptar los términos y condiciones');
      return;
    }

    if (this.userData.contrasena.length < 8) {
      console.error('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    this.serviceSingUp.createUser(this.userData).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado exitosamente',
          
        });

        console.log('Usuario creado exitosamente:', response);
       
      },
      error => {

        Swal.fire({
          icon: 'error',
          title: 'Error al crear usuario',
          text: 'Ocurrió un error al crear el usuario. Por favor, inténtalo nuevamente más tarde.'
        });

        console.error('Error al crear usuario:', error);
     
      }
    );
  }
}


