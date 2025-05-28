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

  getRestaurantById(id: string): PmoResponse<Restaurant | null> {
    const restaurant = this.dbService.getRestaurants().find((r) => r.id === id);

    if (!restaurant) {
      return {
        data: null,
        message: `Restaurant with ID ${id} not found`,
        status: PmoHttpStatus.NOT_FOUND,
      };
    }

    return {
      data: restaurant,
      message: 'Restaurant retrieved successfully',
      status: PmoHttpStatus.OK,
    };
  }
}
