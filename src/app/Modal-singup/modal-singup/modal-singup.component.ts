import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'
import { serviceSingUp } from './Service/serviceSingUp';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Inject, Input  } from '@angular/core';


@Component({
  selector: 'app-modal-singup',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './modal-singup.component.html',
  styleUrl: './modal-singup.component.css'
})

export class ModalSingupComponent {
  userData: any;
  verificationCode: string = ''; 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _matDialogRef: MatDialogRef<ModalSingupComponent>,
    private serviceSingUp: serviceSingUp,
    private router: Router
  ) {
    this.userData = data.userData;
  }

  verifyCode() {
    const sentCode = this.data.code; 
 
    if (this.verificationCode === sentCode) {
    
      this.createUser();
    } else {
  
      Swal.fire({
        icon: 'error',
        title: 'Código incorrecto',
        text: 'El código ingresado no coincide con el código enviado al correo.'
      });
    }
  }

  createUser() {
    this.serviceSingUp.createUser(this.userData).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado exitosamente',
        });
        console.log('Usuario creado exitosamente:', response);
        this.router.navigate(['/login']);
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
