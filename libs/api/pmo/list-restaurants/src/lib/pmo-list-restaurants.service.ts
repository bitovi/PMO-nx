import { Injectable } from '@nestjs/common';
import { CommonApiDbService } from '@common/api/db';
import { PmoHttpStatus, PmoResponse, Restaurant } from '@common/models/common';

@Injectable()
export class PmoListRestaurantsService {
  constructor(private readonly dbService: CommonApiDbService) {}

  getRestaurants(): PmoResponse<Restaurant[]> {
    const restaurants = this.dbService.getRestaurants();
    return {
      data: restaurants,
      message: 'Restaurants retrieved successfully',
      status: PmoHttpStatus.OK,
    };
  }
}
