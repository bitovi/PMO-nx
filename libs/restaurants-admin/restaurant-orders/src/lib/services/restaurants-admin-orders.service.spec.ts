import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RestaurantsAdminOrdersService } from './restaurants-admin-orders.service';
import { HttpClient } from '@angular/common/http';

describe('RestaurantsAdminOrdersService', () => {
  let service: RestaurantsAdminOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [{ provide: HttpClient, useValue: {} }],
    });
    service = TestBed.inject(RestaurantsAdminOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
