import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  code: string = '';
  newPassword: string = '';

  requestPasswordReset() {
    // Lógica para enviar una solicitud de restablecimiento de contraseña
    // Aquí puedes hacer una llamada a tu servicio o API correspondiente
  }

  verifyCode() {
    // Lógica para verificar el código recibido por el usuario
    // Puedes llamar a una API o realizar la verificación en el cliente
  }

  resetPassword() {
    // Lógica para restablecer la contraseña
    // Puedes hacer una llamada a tu servicio o API correspondiente
  }
}
