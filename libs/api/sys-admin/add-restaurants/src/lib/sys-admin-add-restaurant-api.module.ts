import { Module } from '@nestjs/common';
import { SysAdminAddRestaurantApiController } from './sys-admin-add-restaurant-api.controller';
import { SysAdminAddRestaurantApiService } from './sys-admin-add-restaurant-api.service';
import { CommonApiDbModule } from '@common/api/db';

@Module({
  controllers: [SysAdminAddRestaurantApiController],
  imports: [CommonApiDbModule],
  providers: [SysAdminAddRestaurantApiService],
  exports: [SysAdminAddRestaurantApiService],
})
export class SysAdminAddRestaurantApiModule {}
