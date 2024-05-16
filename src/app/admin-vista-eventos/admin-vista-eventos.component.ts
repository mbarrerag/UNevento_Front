import { Component } from '@angular/core';
import { GetAllEventsService } from './Services/get-all-events.service';
import Swal from 'sweetalert2';
import { GetAllUsersService } from '../admin-vista-usuarios/Services/get-all-users.service';
import { NavbarAdminComponent } from '../commons/navbar-admin/navbar-admin.component';
import { FooterComponent } from '../commons/footer/footer.component';
import { NgFor } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-vista-eventos',
  standalone: true,
  imports: [NavbarAdminComponent, FooterComponent, NgFor],
  templateUrl: './admin-vista-eventos.component.html',
  styleUrls: ['./admin-vista-eventos.component.css']
})
export class AdminVistaEventosComponent {
  events: any[] = [];
  userId: number = parseInt(this.cookieService.get('id') || '0');
  token: string = this.cookieService.get('token') || '';
  page: number = 1;
  totalPages: number = 0;


  constructor(
    private getAllEventsService: GetAllEventsService,
    private getAllUsersService: GetAllUsersService,
    private cookieService: CookieService,
    private router: Router

  ) { }

  getAllEvents(): void {
    this.getAllEventsService.getAllEvents(this.userId, this.token, this.page - 1).subscribe(
      (response: any) => {
        console.log(response);
        this.totalPages = Math.floor(parseInt(response.totalElements) / 8) + 1;
        this.events = response.content;
        for (let event of this.events) {
          this.getAllEventsService.getImage(event.imagenUrl).subscribe(
            (image: Blob) => {
              const objectUrl = URL.createObjectURL(image);
              event.imagenUrl = objectUrl;
            }
          );
        }
      }
    );
  }

  deleteEvent(selectedEvent: string): void {
    const deleteEventId: number = parseInt(selectedEvent || '0');
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
        this.getAllEventsService.deleteEvent(this.userId, this.token, deleteEventId).subscribe(
          () => {}
        );
        window.location.reload();
      }
    });
  }

  nextPage(): void {
    this.page++;
    this.getAllEvents();
  }

  prevPage(): void {
    this.page--;
    this.getAllEvents();
  }

  ngOnInit(): void {

    if (parseInt(this.cookieService.get('rol') || '0') !== 10) {
      this.router.navigate(['/home']);      
      Swal.fire({
        title: 'Información',
        text: 'Este apartado es solo para administradores',
        icon: 'info'
      });
    }
    this.getAllEvents()

  }
}
