import { Test } from '@nestjs/testing';
import { RestaurantsAuthApiService } from './restaurants-auth-api.service';

describe('RestaurantsAuthApiService', () => {
  let service: RestaurantsAuthApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RestaurantsAuthApiService],
    }).compile();

    service = module.get(RestaurantsAuthApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
