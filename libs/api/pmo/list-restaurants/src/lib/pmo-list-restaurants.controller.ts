import { Controller, Get } from '@nestjs/common';
import { PmoListRestaurantsService } from './pmo-list-restaurants.service';
import { PmoResponse, Restaurant } from '@common/models/common';

@Controller('restaurants')
export class PmoListRestaurantsController {
  constructor(
    private readonly pmoListRestaurantsService: PmoListRestaurantsService,
  ) {}

  @Get()
  getRestaurants(): PmoResponse<Restaurant[]> {
    return this.pmoListRestaurantsService.getRestaurants();
  }
}
