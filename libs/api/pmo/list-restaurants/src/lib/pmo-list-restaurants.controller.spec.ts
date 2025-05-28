import { Test } from '@nestjs/testing';
import { PmoListRestaurantsController } from './pmo-list-restaurants.controller';
import { PmoListRestaurantsService } from './pmo-list-restaurants.service';
import { CommonApiDbModule } from '@common/api/db';

describe('PmoListRestaurantsController', () => {
  let controller: PmoListRestaurantsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [CommonApiDbModule],
      providers: [PmoListRestaurantsService],
      controllers: [PmoListRestaurantsController],
    }).compile();

    controller = module.get(PmoListRestaurantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
