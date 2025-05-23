import { Test } from '@nestjs/testing';
import { RestaurantsOrdersApiController } from './restaurants-orders-api.controller';
import { RestaurantsOrdersApiService } from './restaurants-orders-api.service';

describe('RestaurantsOrdersApiController', () => {
  let controller: RestaurantsOrdersApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RestaurantsOrdersApiService],
      controllers: [RestaurantsOrdersApiController],
    }).compile();

    controller = module.get(RestaurantsOrdersApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
