import { Component } from '@angular/core';
import { serviceSingUp } from './Sevice/serviceSingUp';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-sing-up-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sing-up-user.component.html',
  styleUrl: './sing-up-user.component.css'
})

export class SingUpUserComponent {
  userData = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: ''
  };

  userData2 = {
    "id": 0,
    "nombre": "meluck",
    "apellido": "b",
    "email": "cv",
    "contrasena": "meluck"
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
    // if (this.userData2.contrasena !== this.confirmPassword) {
    //   console.error('Las contraseñas no coinciden');
    //   return;
    // }

    // if (!this.acceptTerms) {
    //   console.error('Debes aceptar los términos y condiciones');
    //   return;
    // }

    // if (this.userData2.contrasena.length < 8) {
    //   console.error('La contraseña debe tener al menos 8 caracteres');
    //   return;
    // }

    this.serviceSingUp.createUser(this.userData2).subscribe(
      response => {
        console.log('Usuario creado exitosamente:', response);
        // Aquí puedes manejar la respuesta del backend, como redireccionar al usuario a otra página, mostrar un mensaje de éxito, etc.
      },
      error => {
        console.error('Error al crear usuario:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario, registrar el error, etc.
      }
    );
  }
}


