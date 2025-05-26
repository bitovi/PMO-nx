import { CommonApiDbService } from '@common/api/db';
import { PmoHttpStatus, PmoResponse } from '@common/models/common';
import {
  RestaurantLoginRequest,
  RestaurantLoginResponse,
} from '@common/models/restaurants';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantsAuthApiService {
  constructor(private readonly commonApiDbService: CommonApiDbService) {}

  login(
    restaurantLoginRequest: RestaurantLoginRequest,
  ): PmoResponse<RestaurantLoginResponse | null> {
    const restaurant = this.commonApiDbService.getRestaurantByName(
      restaurantLoginRequest.name,
    );

    if (!restaurant) {
      return {
        status: PmoHttpStatus.NOT_FOUND,
        message: 'Restaurant not found',
        data: null,
      };
    }

    return {
      status: PmoHttpStatus.OK,
      message: 'Restaurant found',
      data: restaurant,
    };
  }
}
