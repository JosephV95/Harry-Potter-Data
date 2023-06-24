import { TestBed } from '@angular/core/testing';

import { SpellsAPIService } from './spells-api.service';

describe('SpellsAPIService', () => {
  let service: SpellsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
