import { Component } from '@angular/core';
import { serviceSingUp } from './Sevice/serviceSingUp';
import { Router } from '@angular/router'; // Importa Router de @angular/router
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Modal } from '@mui/base';
import { ModalSingupComponent } from '../../Modal-singup/modal-singup/modal-singup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-sing-up-user',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatDialogModule],
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

  constructor(private _matDialog: MatDialog, private serviceSingUp: serviceSingUp) {} 

  abrirModal(code: any, userData: any): void {
    this._matDialog.open(ModalSingupComponent, {
      data: { code: code, userData: userData }
    });
  }

  togglePasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  togglePasswordVisibility2() {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    if (this.userData.contrasena !== this.confirmPassword) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
        return;
    }

    if (!this.acceptTerms) {
      Swal.fire("Error", "Debes aceptar los términos y condiciones", "error");
        return;
    }

    if (this.userData.contrasena.length < 8) {
      Swal.fire("Error", "La contraseña debe tener al menos 8 caracteres", "error");
        return;
    }

    if (!/[A-Z]/.test(this.userData.contrasena)) {
      Swal.fire("Error", "La contraseña debe contener al menos una letra mayúscula", "error");
        return;
    }

    if (this.userData.contrasena.length > 15) {
      Swal.fire("Error", "La contraseña no debe exceder los 15 caracteres", "error");
        return;
    }


    

    this.serviceSingUp.getCode(this.userData.correo).subscribe(
      response => {
        // console.log('Código obtenido:', response);
        // Open modal after code is obtained
        this.abrirModal(response, this.userData);
      },
      error => {
        console.error('Error al obtener el código:', error);
      }

    );
  }
 
  }
