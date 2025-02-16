import { TestBed } from '@angular/core/testing';

import { CryptoUtilsService } from './crypto-utils.service';

describe('CryptoUtilsService', () => {
  let service: CryptoUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
