import { Test } from '@nestjs/testing';
import { RestaurantsOrdersApiService } from './restaurants-orders-api.service';
import { CommonApiDbModule } from '@common/api/db';

describe('RestaurantsOrdersApiService', () => {
  let service: RestaurantsOrdersApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RestaurantsOrdersApiService],
      imports: [CommonApiDbModule],
    }).compile();

    service = module.get(RestaurantsOrdersApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
