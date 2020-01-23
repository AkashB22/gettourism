import { TestBed } from '@angular/core/testing';

import { PgServiceService } from './pg-service.service';
import { HttpClient } from '@angular/common/http';

describe('PgServiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() =>{
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    let service: PgServiceService = new PgServiceService(<any> httpClientSpy)
  });

  it('should be created', (service) => {
    expect(service).toBeTruthy();
  });

  it('Checking getPgInfo function', (service) => {
    service.getPgInfo().subscribe(
      (data)=>{
        expect(data).toBeTruthy();
      }
    )
  });

});
