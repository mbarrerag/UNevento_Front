import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { ProfileService } from './Services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,RouterLinkActive,CommonModule,RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private sanitizer: DomSanitizer, private profileService: ProfileService) { }

  userData: any = {};
  userImage: any = {};

  ngOnInit(): void {
    const userID = parseInt(localStorage.getItem('id') || '0');
    const token = localStorage.getItem('token') || '';

    this.profileService.getUserData(userID, token).subscribe((response: any) => {
      this.userData = response;
      console.log(this.userData);
      this.profileService.getImage(this.userData.imageUrl).subscribe((response: Blob) => {
        const objectUrl = URL.createObjectURL(response);
        this.userImage = objectUrl
        console.log(this.userImage);
      });
    });

    
  }


  deleteUser():void{
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar tu cuenta?',
      text: 'Esta acción no se puede deshacer y se perderán todos los datos asociados a tu cuenta.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const userID = parseInt(localStorage.getItem('id') || '0');
        const token = localStorage.getItem('token') || '';
        this.profileService.deleteUser(userID, token).subscribe((response: any) => {
          console.log(response);
          localStorage.clear();
          Swal.fire({
            title: 'Completado',
            text: 'Usuario eliminado con éxito',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then((result)=>{
            if(result.isConfirmed){
              window.location.href = '/';
            }
          });
        });
      }
    });
  }

  private showErrorAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      // Other available icons: 'success', 'warning', 'info', 'question'
      // Example usage: icon: 'success'
    });
  }
  private showSuccessAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      // Other available icons: 'success', 'warning', 'info', 'question'
      // Example usage: icon: 'success'
    });
  }

  private showWarningAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      confirmButtonText: 'Aceptar',
    });
}
}
