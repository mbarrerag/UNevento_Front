import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMyEventAttendanceComponent } from './modal-my-event-attendance.component';

describe('ModalMyEventAttendanceComponent', () => {
  let component: ModalMyEventAttendanceComponent;
  let fixture: ComponentFixture<ModalMyEventAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMyEventAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalMyEventAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
