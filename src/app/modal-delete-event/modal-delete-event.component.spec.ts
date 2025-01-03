import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteEventComponent } from './modal-delete-event.component';
import { ModalModifyEventComponent } from '../modal-modify-event/modal-modify-event.component';

describe('ModalModifyEventComponent', () => {
  let component: ModalModifyEventComponent;
  let fixture: ComponentFixture<ModalModifyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalModifyEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalModifyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
