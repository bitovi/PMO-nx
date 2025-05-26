import { Test } from '@nestjs/testing';
import { RestaurantsAuthApiService } from './restaurants-auth-api.service';
import { CommonApiDbModule } from '@common/api/db';

describe('RestaurantsAuthApiService', () => {
  let service: RestaurantsAuthApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RestaurantsAuthApiService],
      imports: [CommonApiDbModule],
    }).compile();

    service = module.get(RestaurantsAuthApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
