import { TestBed } from '@angular/core/testing';

import { CreateComEventService } from './create-com-event.service';

describe('CreateComEventService', () => {
  let service: CreateComEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateComEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
