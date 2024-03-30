import { Component } from '@angular/core';
import { NavbarComponent } from '../../commons/navbar/navbar.component';
import { FooterComponent } from '../../commons/footer/footer.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditProfileService } from './Services/edit-profile.service';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,RouterLinkActive,CommonModule,RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  constructor(private Editprofileservice: EditProfileService, private router:Router) { }

  userData: any = {};

  NuevoNombre:string="";
  NuevoApellido:string="";

  ngOnInit(): void {
    const userID = parseInt(localStorage.getItem('id') || '0');
    const token = localStorage.getItem('token') || '';

    this.Editprofileservice.getUserData(userID, token).subscribe((response: any) => {
      this.userData = response;
      this.NuevoNombre=this.userData.nombre;  
      this.NuevoApellido=this.userData.apellido;
    });
  }

  updateData(){
    if (!this.NuevoNombre || !this.NuevoApellido) {
      this.showErrorAlert('Error', 'El nombre y el apellido no pueden estar vacíos');
      return;
    }
    this.Editprofileservice.editData(this.NuevoNombre, this.NuevoApellido, parseInt(localStorage.getItem('id') || '0'), localStorage.getItem('token') || '').subscribe((response: any) => {
      this.showSuccessAlert('Datos actualizados', 'Los datos se han actualizado correctamente');
      this.router.navigate(['/profile']);
    }, (error: any) => {
      this.showErrorAlert('Error', 'Ha ocurrido un error al actualizar los datos');
      console.log(error);
    });
  }

  alphaOnly(event: any) {
    const pattern = /[a-zA-Z ]/;
    let inputChar = String.fromCharCode(event.charCode);
  
    if (!pattern.test(inputChar)) {
      // Carácter no válido, se previene la entrada
      event.preventDefault();
    }
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
}

