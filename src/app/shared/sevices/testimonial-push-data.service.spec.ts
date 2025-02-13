import { TestBed } from '@angular/core/testing';

import { TestimonialPushDataService } from './testimonial-push-data.service';

describe('TestimonialPushDataService', () => {
  let service: TestimonialPushDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonialPushDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
