import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'
import { forgotPassword } from './Service/forgotPassword';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Inject, Input  } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modalForgotPassword',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './modalForgotPassword.component.html',
  styleUrl: './modalForgotPassword.component.css'
})

export class ModalForgotPassword {
  userData: any;
  verificationCode: string = ''; 

  acceptTerms = false;
  showConfirmPassword = false;
  showPassword = false;

  password1: string = '';
  password2: string = '';
  password1Visible: boolean = false;
  password2Visible: boolean = false;
  codigoVerificado: boolean = false;


  togglePasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  togglePasswordVisibility2() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _matDialogRef: MatDialogRef<ModalForgotPassword>,
    private forgotPassword: forgotPassword,
    private router: Router
  ) {
    this.userData = data.userData;
  }

  verifyCode() {
    const sentCode = parseInt(this.data.code); 
    const enteredCode = parseInt(this.verificationCode); 
    console.log(enteredCode, sentCode);

    if (sentCode === enteredCode) {
     
      this.codigoVerificado = true;
    } else {
  
      Swal.fire({
        icon: 'error',
        title: 'Código incorrecto',
        text: 'El código ingresado no coincide con el código enviado al correo.'
      });
    }
  }

  submitPassword() {
    console.log('Contraseña 1:', this.password1);
    console.log('Contraseña 2:', this.password2);
    this.updateUser();
  }

  updateUser() {

    if (this.password1 !== this.password2) {
      Swal.fire("Error", "Las contraseñas no coinciden", "error");
        return;
    }

    if (this.password1.length < 8) {
      Swal.fire("Error", "La contraseña debe tener al menos 8 caracteres", "error");
        return;
    }

    if (!/[A-Z]/.test(this.password1)) {
      Swal.fire("Error", "La contraseña debe contener al menos una letra mayúscula", "error");
        return;
    }

    if (this.password1.length > 15) {
      Swal.fire("Error", "La contraseña no debe exceder los 15 caracteres", "error");
        return;
    }

    this.forgotPassword.updateUser(this.userData, this.password1).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Contraseña restablecida exitosamente',
        });
        console.log('Contraseña restablecida exitosamente:', response);
        this.router.navigate(['/login']);

        this._matDialogRef.close();
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al restablecer la contraseña',
          text: 'Ocurrió un error al restablecer la contraseña. Por favor, inténtalo nuevamente más tarde.'
        });
        console.error('Error al restablecer la contraseña:', error);
      }
    );
  }
}
