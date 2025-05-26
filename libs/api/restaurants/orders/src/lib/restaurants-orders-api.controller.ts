import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { RestaurantsOrdersApiService } from './restaurants-orders-api.service';
import { OrderModel, PmoResponse } from '@common/models/common';
import { OrdersByRestaurantsResponse } from '@common/models/restaurants/orders';

@Controller('restaurants/orders')
export class RestaurantsOrdersApiController {
  constructor(
    private restaurantsOrdersApiService: RestaurantsOrdersApiService,
  ) {}

  @Get(':restaurantId')
  getOrders(
    @Param('restaurantId') restaurantId: string,
  ): PmoResponse<OrdersByRestaurantsResponse[]> {
    return this.restaurantsOrdersApiService.getOrders(restaurantId);
  }

  @Put(':orderId/status')
  updateOrderStatus(
    @Param('orderId') orderId: string,
    @Body('newStatus') newStatus: OrderModel['status'],
  ): PmoResponse<OrdersByRestaurantsResponse | null> {
    return this.restaurantsOrdersApiService.updateOrderStatus(
      orderId,
      newStatus,
    );
  }
}
