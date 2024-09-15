import { TestBed } from '@angular/core/testing';

import { TravelPriceService } from './travel-price.service';

describe('TravelPriceService', () => {
  let service: TravelPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
