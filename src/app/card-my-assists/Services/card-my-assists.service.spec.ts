import { TestBed } from '@angular/core/testing';

import { CardMyAssistsService } from './card-my-assists.service';

describe('CardMyAssistsService', () => {
  let service: CardMyAssistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardMyAssistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
