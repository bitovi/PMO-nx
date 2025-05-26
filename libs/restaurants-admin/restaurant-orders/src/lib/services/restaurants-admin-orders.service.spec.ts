import { TestBed } from '@angular/core/testing';

import { RestaurantsAdminOrdersService } from './restaurants-admin-orders.service';

describe('RestaurantsAdminOrdersService', () => {
  let service: RestaurantsAdminOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsAdminOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
