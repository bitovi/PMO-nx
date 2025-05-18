import { Injectable } from '@nestjs/common';
import { PmoHttpStatus, PmoResponse, Restaurant } from '@common/models/common';
import { CommonApiDbService } from '@common/api/db';

@Injectable()
export class SysAdminListRestaurantsApiService {
  constructor(private readonly dbService: CommonApiDbService) {}

  getRestaurants(): PmoResponse<Restaurant[]> {
    const restaurants = this.dbService.getRestaurants();
    return {
      data: restaurants,
      message: 'Restaurants retrieved successfully',
      status: PmoHttpStatus.OK,
    };
  }

  deleteRestaurant(id: string): PmoResponse<null> {
    this.dbService.deleteRestaurant(id);
    return {
      data: null,
      message: 'Restaurant deleted successfully',
      status: PmoHttpStatus.OK,
    };
  }
}
