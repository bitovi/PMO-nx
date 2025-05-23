import { Module } from '@nestjs/common';
import { RestaurantsOrdersApiController } from './restaurants-orders-api.controller';
import { RestaurantsOrdersApiService } from './restaurants-orders-api.service';
import { CommonApiDbModule } from '@common/api/db';

@Module({
  controllers: [RestaurantsOrdersApiController],
  providers: [RestaurantsOrdersApiService],
  exports: [RestaurantsOrdersApiService],
  imports: [CommonApiDbModule],
})
export class RestaurantsOrdersApiModule {}
