import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SysAdminAuthApiModule } from '@features/api/sys-admin/auth';
import { SysAdminAddRestaurantApiModule } from '@features/api/sys-admin/add-restaurant';
import { SysAdminEditRestaurantApiModule } from '@features/api/sys-admin/edit-restaurant';
import { SysAdminListRestaurantsApiModule } from '@features/api/sys-admin/list-restaurants';
import { RestaurantsAuthApiModule } from '@features/api/restaurants/auth';
import { RestaurantsOrdersApiModule } from '@features/api/restaurants/orders';
import { CommonApiDbModule } from '@common/api/db';
import { PmoListRestaurantsModule } from '@features/api/pmo/list-restaurants';
@Module({
  imports: [
    SysAdminAuthApiModule,
    SysAdminAddRestaurantApiModule,
    SysAdminEditRestaurantApiModule,
    SysAdminListRestaurantsApiModule,
    RestaurantsAuthApiModule,
    RestaurantsOrdersApiModule,
    PmoListRestaurantsModule,
    CommonApiDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
