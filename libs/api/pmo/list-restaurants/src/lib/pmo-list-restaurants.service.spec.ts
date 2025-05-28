import { Test } from '@nestjs/testing';
import { PmoListRestaurantsService } from './pmo-list-restaurants.service';
import { CommonApiDbModule } from '@common/api/db';

describe('PmoListRestaurantsService', () => {
  let service: PmoListRestaurantsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PmoListRestaurantsService],
      imports: [CommonApiDbModule],
    }).compile();

    service = module.get(PmoListRestaurantsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
