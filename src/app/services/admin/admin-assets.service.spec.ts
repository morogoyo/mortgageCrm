import { TestBed } from '@angular/core/testing';

import { AdminAssetsService } from './admin-assets.service';

describe('AdminAssetsService', () => {
  let service: AdminAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
