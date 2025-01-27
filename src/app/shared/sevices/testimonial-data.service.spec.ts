import { TestBed } from '@angular/core/testing';

import { TestimonialDataService } from './testimonial-data.service';

describe('TestimonialDataService', () => {
  let service: TestimonialDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonialDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
