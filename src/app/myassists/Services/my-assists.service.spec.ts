import { TestBed } from '@angular/core/testing';

import { MyAssistsService } from './my-assists.service';

describe('MyAssistsService', () => {
  let service: MyAssistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAssistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
