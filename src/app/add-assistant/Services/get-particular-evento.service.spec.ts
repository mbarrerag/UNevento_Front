import { TestBed } from '@angular/core/testing';

import { GetParticularEventoService } from './get-particular-evento.service';

describe('GetParticularEventoService', () => {
  let service: GetParticularEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetParticularEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
