import { Module } from '@nestjs/common';
import { PmoListOrderService } from './pmo-list-order.service';
import { PmoListOrderController } from './pmo-list-order.controller';
import { CommonApiDbModule } from '@common/api/db';

@Module({
  imports: [CommonApiDbModule],
  controllers: [PmoListOrderController],
  providers: [PmoListOrderService],
})
export class PmoListOrderModule {}
