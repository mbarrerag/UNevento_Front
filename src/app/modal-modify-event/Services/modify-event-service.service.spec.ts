import { TestBed } from '@angular/core/testing';

import { ModifyEventServiceService } from './modify-event-service.service';

describe('ModifyEventServiceService', () => {
  let service: ModifyEventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyEventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
