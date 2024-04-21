import { Component } from '@angular/core';
import { ForgotService } from './Service/ForgotService';
import { ModalForgotPassword } from '../modal-forgot-password/modalForgotPassword.component';
import Swal from 'sweetalert2';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  code: string = '';

  userData = {
    "correo" : "",
  };

  constructor(private _matDialog: MatDialog, private ForgotService: ForgotService) {} 
  abrirModal(code: any, userData: any): void {
    this._matDialog.open(ModalForgotPassword, {
      data: { code: code, userData: userData }
    });
  }

  submitForm() {
    this.ForgotService.getCode(this.userData.correo).subscribe(
      response => {
        console.log('Código obtenido:', response);
        // Open modal after code is obtained
        this.abrirModal(response, this.userData);
      },
      error => {
        console.error('Error al obtener el código:', error);
      }

    );
  }
}
