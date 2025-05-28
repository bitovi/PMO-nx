import { Module } from '@nestjs/common';
import { PmoListRestaurantsService } from './pmo-list-restaurants.service';
import { PmoListRestaurantsController } from './pmo-list-restaurants.controller';
import { CommonApiDbModule } from '@common/api/db';

@Module({
  imports: [CommonApiDbModule],
  controllers: [PmoListRestaurantsController],
  providers: [PmoListRestaurantsService],
  exports: [PmoListRestaurantsService],
})
export class PmoListRestaurantsModule {}
