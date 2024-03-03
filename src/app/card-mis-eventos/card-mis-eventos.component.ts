import { Component } from '@angular/core';
import { ModalDeleteEventComponent } from '../modal-delete-event/modal-delete-event.component';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ModalModifyEventComponent } from '../modal-modify-event/modal-modify-event.component';



@Component({
  selector: 'app-card-mis-eventos',
  standalone: true,
  imports: [ModalDeleteEventComponent, NgIf, ModalModifyEventComponent],
  templateUrl: './card-mis-eventos.component.html',
  styleUrl: './card-mis-eventos.component.css'
})

export class CardMisEventosComponent {
  @Input() data: any;

  showModalDelete = false;

  onOpenModalDelete(): void {
    this.showModalDelete = true;
  }

  onCloseModalDelete(): void {    
    this.showModalDelete = false;
  }

  showModalModify = false;

  onOpenModalModify(): void {
    this.showModalModify = true;
  }

  onCloseModalModify(): void {
    this.showModalModify = false;
  }
}
