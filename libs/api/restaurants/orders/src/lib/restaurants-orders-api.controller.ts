import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantsOrdersApiService } from './restaurants-orders-api.service';
import { OrderModel, PmoResponse } from '@common/models/common';

@Controller('restaurants/orders')
export class RestaurantsOrdersApiController {
  constructor(
    private restaurantsOrdersApiService: RestaurantsOrdersApiService,
  ) {}

  @Get(':restaurantId')
  getOrders(
    @Param('restaurantId') restaurantId: string,
  ): PmoResponse<OrderModel[]> {
    return this.restaurantsOrdersApiService.getOrders(restaurantId);
  }
}
