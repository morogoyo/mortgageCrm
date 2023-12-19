import { TestBed } from '@angular/core/testing';

import { EstimateDataService } from './estimate-data.service';

describe('EstimateDataService', () => {
  let service: EstimateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
