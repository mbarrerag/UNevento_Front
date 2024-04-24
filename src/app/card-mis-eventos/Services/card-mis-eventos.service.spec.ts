import { TestBed } from '@angular/core/testing';

import { CardMisEventosService } from './card-mis-eventos.service';

describe('CardMisEventosService', () => {
  let service: CardMisEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardMisEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
