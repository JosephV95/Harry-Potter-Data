import { TestBed } from '@angular/core/testing';

import { DataHarryPotterApiService } from './data-harry-potter-api.service';

describe('DataHarryPotterApiService', () => {
  let service: DataHarryPotterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHarryPotterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
