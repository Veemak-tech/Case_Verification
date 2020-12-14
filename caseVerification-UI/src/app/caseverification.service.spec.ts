import { TestBed } from '@angular/core/testing';

import { CaseverificationService } from './caseverification.service';

describe('CaseverificationService', () => {
  let service: CaseverificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseverificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
