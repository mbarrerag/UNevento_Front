import { TestBed } from '@angular/core/testing';

import { CardPremiumEventsService } from './card-premium-events.service';

describe('CardPremiumEventsService', () => {
  let service: CardPremiumEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardPremiumEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
