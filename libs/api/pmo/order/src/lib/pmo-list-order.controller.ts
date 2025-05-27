import { Body, Controller, Post } from '@nestjs/common';
import { PmoListOrderService } from './pmo-list-order.service';
import { OrderModel, PmoResponse } from '@common/models/common';
import { CreateOrderRequest } from './models/create-order.request';

@Controller('orders')
export class PmoListOrderController {
  constructor(private readonly orderService: PmoListOrderService) {}

  @Post('add')
  addOrder(@Body() orderRequest: CreateOrderRequest): PmoResponse<OrderModel> {
    return this.orderService.addOrder(orderRequest);
  }
}
