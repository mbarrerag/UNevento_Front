import { TestBed } from '@angular/core/testing';

import { CardUserEventServiceService } from './card-user-event-service.service';

describe('CardUserEventServiceService', () => {
  let service: CardUserEventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardUserEventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
