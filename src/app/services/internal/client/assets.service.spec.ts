import { TestBed } from '@angular/core/testing';

import { AssetDataService } from './asset-data.service';

describe('AssetsService', () => {
  let service: AssetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
