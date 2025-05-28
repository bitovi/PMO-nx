import { Body, Controller, Post } from '@nestjs/common';
import { PmoListOrderService } from './pmo-list-order.service';
import { OrderModel, PmoResponse } from '@common/models/common';
import { PmoCreateOrderRequest } from '@common/models/pmo/orders';

@Controller('orders')
export class PmoListOrderController {
  constructor(private readonly orderService: PmoListOrderService) {}

  @Post('add')
  addOrder(
    @Body() orderRequest: PmoCreateOrderRequest,
  ): PmoResponse<OrderModel | null> {
    return this.orderService.addOrder(orderRequest);
  }
}
