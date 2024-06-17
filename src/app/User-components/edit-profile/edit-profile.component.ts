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
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,RouterLinkActive,CommonModule,RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  constructor(private Editprofileservice: EditProfileService, private router:Router, private cookiesService:CookieService) { }

  userData: any = {};
  
  NuevoNombre:string="";
  NuevoApellido:string="";

  imageSrc: string | ArrayBuffer | null = null;
  Imagen: any; // Initialize the "Imagen" property

  rol:number=0;

  ngOnInit(): void {
    const userID = parseInt(this.cookiesService.get('id') || '0');
    const token = this.cookiesService.get('token') || '';

    this.Editprofileservice.getUserData(userID, token).subscribe((response: any) => {
      this.userData = response;
      this.NuevoNombre=this.userData.nombre;  
      this.NuevoApellido=this.userData.apellido;
      this.Editprofileservice.getImage(this.userData.imageUrl).subscribe((response: Blob) => {
        this.Imagen = new File([response], this.userData.imageUrl);
        this.handleImageUpload({ target: { files: [this.Imagen] } });
      });
    });

    this.rol=parseInt(this.cookiesService.get('rol') || '0');
  }

  OnCancelar(){
    this.router.navigate(['/profile']);
  }
  
  handleImageUpload(event: any): void {
    const file = event.target.files[0];//Acceder al archivo cargado por el usuario
    this.Imagen = file;
    const reader = new FileReader();//API que permite leer archivos
    reader.onload = (e) => {///Controlador que se activará cuando la carga se ha realizado
      this.imageSrc = e.target?.result || null;
    };
    reader.readAsDataURL(file);
  }

  updateData(){
    if (!this.NuevoNombre || !this.NuevoApellido) {
      this.showErrorAlert('Error', 'El nombre y el apellido no pueden estar vacíos');
      return;
    }
    let userData={
      id:parseInt(this.cookiesService.get('id') || '0'),
      nombre:this.NuevoNombre,
      apellido:this.NuevoApellido
    }

    this.Editprofileservice.editData(userData,this.Imagen, parseInt(this.cookiesService.get('id') || '0'), this.cookiesService.get('token') || '').subscribe((response: any) => {
      this.showSuccessAlert('Datos actualizados', 'Los datos se han actualizado correctamente');
      this.cookiesService.set('imagekey', `https://uneventoback-production-3c28.up.railway.app/images/${response.imageUrl}`);
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

