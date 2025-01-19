import { TestBed } from '@angular/core/testing';

import { RealisationsDataService } from './realisations-data.service';

describe('RealisationsDataService', () => {
  let service: RealisationsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealisationsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
