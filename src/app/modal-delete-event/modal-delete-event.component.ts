import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { DeleteEventServiceService } from './Services/delete-event-service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; // Importar CookieService

@Component({
  selector: 'app-modal-delete-event',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal-delete-event.component.html',
  styleUrls: ['./modal-delete-event.component.css']
})
export class ModalDeleteEventComponent {
  @Input() data: any;
  @Output() closeModalDelete = new EventEmitter<void>();

  constructor(
    private deleteEventService: DeleteEventServiceService,
    private router: Router,
    private cookieService: CookieService // Inyectar CookieService
  ) { }

  onCloseDeleteCancel(): void {
    this.closeModalDelete.emit();
  }

  result: any;

  onCloseDeleteAccept(): void {
    const userId = parseInt(this.cookieService.get('id') || '0');
    const token = this.cookieService.get('token') || '';
    const eventId = parseInt(this.data.id);

    console.log(this.data.id);

    this.deleteEventService.deleteUserEvent(userId, token, eventId).subscribe((response: any) => {
      this.result = response.content;
    });
    location.reload();
  }
}
