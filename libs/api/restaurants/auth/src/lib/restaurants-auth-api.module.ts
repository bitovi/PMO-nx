import { Module } from '@nestjs/common';
import { RestaurantsAuthApiController } from './restaurants-auth-api.controller';
import { RestaurantsAuthApiService } from './restaurants-auth-api.service';
import { CommonApiDbModule } from '@common/api/db';

@Module({
  controllers: [RestaurantsAuthApiController],
  providers: [RestaurantsAuthApiService],
  exports: [RestaurantsAuthApiService],
  imports: [CommonApiDbModule],
})
export class RestaurantsAuthApiModule {}
