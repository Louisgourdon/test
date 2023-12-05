import { TestBed } from '@angular/core/testing';

import { ApicryptoService } from './apicrypto.service';

describe('ApicryptoService', () => {
  let service: ApicryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
