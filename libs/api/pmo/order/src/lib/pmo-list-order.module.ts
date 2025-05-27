import { Module } from '@nestjs/common';
import { PmoListOrderService } from './pmo-list-order.service';

@Module({
  controllers: [],
  providers: [PmoListOrderService],
  exports: [PmoListOrderService],
})
export class PmoListOrderModule {}
