import { TestBed } from '@angular/core/testing';

import { CardCommunityeventsService } from './card-communityevents.service';

describe('CardCommunityeventsService', () => {
  let service: CardCommunityeventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardCommunityeventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
