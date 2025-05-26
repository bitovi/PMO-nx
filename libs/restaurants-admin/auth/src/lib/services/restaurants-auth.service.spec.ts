import { TestBed } from '@angular/core/testing';

import { RestaurantsAuthService } from './restaurants-auth.service';
import { HttpClient } from '@angular/common/http';

describe('RestaurantsAuthService', () => {
  let service: RestaurantsAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(RestaurantsAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
