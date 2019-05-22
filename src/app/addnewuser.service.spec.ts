import { TestBed } from '@angular/core/testing';

import { AddnewuserService } from './addnewuser.service';

describe('AddnewuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddnewuserService = TestBed.get(AddnewuserService);
    expect(service).toBeTruthy();
  });
});
