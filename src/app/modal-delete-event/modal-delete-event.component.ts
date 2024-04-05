import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import {NgIf} from '@angular/common';
import { DeleteEventServiceService } from './Services/delete-event-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete-event',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal-delete-event.component.html',
  styleUrl: './modal-delete-event.component.css'
})
export class ModalDeleteEventComponent {
  @Input() data: any;
  @Output() closeModalDelete = new EventEmitter<void>();

  constructor(private deleteEventService: DeleteEventServiceService, private router:Router) {  }

  onCloseDeleteCancel(): void {
    this.closeModalDelete.emit();
  }

  result: any;

  onCloseDeleteAccept(): void {
    const userId = parseInt(localStorage.getItem('id') || '0');
    const token = localStorage.getItem('token') || '';
    const eventId = parseInt(this.data.id);

    console.log(this.data.id);

    this.deleteEventService.deleteUserEvent(userId, token, eventId).subscribe((response: any) => {
      this.result = response.content;
      console.log(this.result);
      this.router.navigate(['/miseventos']);
    });
  }
}
