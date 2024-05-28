import { TestBed } from '@angular/core/testing';

import { ModalMyEventAttendanceService } from './modal-my-event-attendance.service';

describe('ModalMyEventAttendanceService', () => {
  let service: ModalMyEventAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalMyEventAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
