import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import {NgIf} from '@angular/common';

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

  onCloseDelete(): void {
    this.closeModalDelete.emit();
  }
}
