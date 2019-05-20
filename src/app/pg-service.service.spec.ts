import { TestBed } from '@angular/core/testing';

import { PgServiceService } from './pg-service.service';

describe('PgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PgServiceService = TestBed.get(PgServiceService);
    expect(service).toBeTruthy();
  });
});
