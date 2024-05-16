import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../commons/navbar/navbar.component';
import { GetAllUsersService } from './Services/get-all-users.service';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../commons/footer/footer.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vista-usuarios',
  standalone: true,
  imports: [NavbarComponent, NgFor, FooterComponent],
  templateUrl: './admin-vista-usuarios.component.html',
  styleUrl: './admin-vista-usuarios.component.css'
})
export class AdminVistaUsuariosComponent implements OnInit {
  users : any[] = [];
  userId: number = parseInt(localStorage.getItem('id') || '0');
  token: string = localStorage.getItem('token') || '';
  page: number = 1;
  totalPages: number = 0;

  constructor(private getAllUsersService: GetAllUsersService,
    private router : Router
  ) { }

  getAllUsers() : void {
    this.getAllUsersService.getAllUsers(this.userId, this.token, this.page - 1).subscribe(
      (response: any) => {
        console.log(response)
        this.totalPages = Math.floor(parseInt(response.totalElements) / 8) + 1;
        this.users = response.content;
        for (let user of this.users) {
          this.getAllUsersService.getImage(user.imageUrl).subscribe(
            (image: Blob) => {
              const objectUrl = URL.createObjectURL(image);
              user.imageUrl = objectUrl;
            }
          )
        }
      }
    )
  }


  deleteUser(selectedUser: string) : void {
    const deleteUserId : number = parseInt(selectedUser || '0');
    Swal.fire({
      title: '¿Está seguro que quiere eliminar este usuario?',
      text: '¡No podrá revertir esta acción una vez se haya llevado a cabo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.getAllUsersService.deleteUser(this.userId, this.token, deleteUserId).subscribe(
          () => {}
        );
        window.location.reload();
      }
    });
  }

  nextPage() : void {
    this.page++; 
    this.getAllUsers();
  }

  prevPage(): void {
    this.page--;
    this.getAllUsers();
  }  

  ngOnInit(): void {
    if (parseInt(localStorage.getItem('rol') || '0') !== 10) {
      this.router.navigate(['/home']);      
      Swal.fire({
        title: 'Información',
        text: 'Este apartado es solo para administradores',
        icon: 'info'
      });
    }
    this.getAllUsers()
  }
}
