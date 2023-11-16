import { TestBed } from '@angular/core/testing';

import { GetChampionsService } from './get-champions.service';

describe('GetChampionsService', () => {
  let service: GetChampionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetChampionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
