import { TestBed } from '@angular/core/testing';

import { CardeventsService } from './card-events.component.service';

describe('CardCommunityeventsService', () => {
  let service: CardeventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardeventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
