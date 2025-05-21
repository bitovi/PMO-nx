import { Test } from '@nestjs/testing';
import { RestaurantsOrdersApiService } from './restaurants-orders-api.service';

describe('RestaurantsOrdersApiService', () => {
  let service: RestaurantsOrdersApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RestaurantsOrdersApiService],
    }).compile();

    service = module.get(RestaurantsOrdersApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
