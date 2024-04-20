import { TestBed } from '@angular/core/testing';

import { CommunityeventsService } from './communityevents.service';

describe('CommunityeventsService', () => {
  let service: CommunityeventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityeventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
