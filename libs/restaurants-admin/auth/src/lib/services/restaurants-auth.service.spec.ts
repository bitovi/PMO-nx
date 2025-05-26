import { TestBed } from '@angular/core/testing';

import { RestaurantsAuthService } from './restaurants-auth.service';

describe('RestaurantsAuthService', () => {
  let service: RestaurantsAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
