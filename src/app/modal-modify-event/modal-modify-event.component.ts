import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-modify-event',
  standalone: true,
  imports: [],
  templateUrl: './modal-modify-event.component.html',
  styleUrl: './modal-modify-event.component.css'
})
export class ModalModifyEventComponent {
  @Input() data: any;
  @Output() closeModalModify = new EventEmitter<void>();

  onCloseModify(): void {
    this.closeModalModify.emit();
  }
}
