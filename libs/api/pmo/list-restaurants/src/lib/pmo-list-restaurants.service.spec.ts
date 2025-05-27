import { Test } from '@nestjs/testing';
import { PmoListRestaurantsService } from './pmo-list-restaurants.service';

describe('PmoListRestaurantsService', () => {
  let service: PmoListRestaurantsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PmoListRestaurantsService],
    }).compile();

    service = module.get(PmoListRestaurantsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
