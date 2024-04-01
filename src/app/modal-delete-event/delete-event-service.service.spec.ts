import { TestBed } from '@angular/core/testing';

import { DeleteEventServiceService } from './delete-event-service.service';

describe('DeleteEventServiceService', () => {
  let service: DeleteEventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteEventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
