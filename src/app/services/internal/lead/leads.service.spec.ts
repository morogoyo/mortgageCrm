import { TestBed } from '@angular/core/testing';

import { LeadDataService } from './lead-data.service';

describe('LeadsService', () => {
  let service: LeadDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
