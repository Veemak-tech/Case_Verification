import { TestBed } from '@angular/core/testing';

import { FreeapiserviceService } from './freeapiservice.service';

describe('FreeapiserviceService', () => {
  let service: FreeapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
