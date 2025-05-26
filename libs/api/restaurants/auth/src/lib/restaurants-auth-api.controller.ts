import { Body, Controller, Post } from '@nestjs/common';
import { RestaurantsAuthApiService } from './restaurants-auth-api.service';
import {
  RestaurantLoginRequest,
  RestaurantLoginResponse,
} from '@common/models/restaurants';
import { PmoResponse } from '@common/models/common';

@Controller('restaurants/auth')
export class RestaurantsAuthApiController {
  constructor(private restaurantsAuthApiService: RestaurantsAuthApiService) {}

  @Post('login')
  login(
    @Body() restaurantLoginRequest: RestaurantLoginRequest,
  ): PmoResponse<RestaurantLoginResponse | null> {
    return this.restaurantsAuthApiService.login(restaurantLoginRequest);
  }
}
