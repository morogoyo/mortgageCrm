import { TestBed } from '@angular/core/testing';

import { ClientAssetService } from './client-asset.service';

describe('ClientAssetService', () => {
  let service: ClientAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
