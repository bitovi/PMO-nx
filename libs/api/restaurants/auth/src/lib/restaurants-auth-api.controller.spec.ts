import { Test } from '@nestjs/testing';
import { RestaurantsAuthApiController } from './restaurants-auth-api.controller';
import { RestaurantsAuthApiService } from './restaurants-auth-api.service';

describe('RestaurantsAuthApiController', () => {
  let controller: RestaurantsAuthApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RestaurantsAuthApiService],
      controllers: [RestaurantsAuthApiController],
    }).compile();

    controller = module.get(RestaurantsAuthApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
