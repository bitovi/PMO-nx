import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SysAdminAuthApiModule } from '@features/api/sys-admin/auth';
import { SysAdminAddRestaurantApiModule } from '@features/api/sys-admin/add-restaurant';
import { SysAdminEditRestaurantApiModule } from '@features/api/sys-admin/edit-restaurant';
import { SysAdminListRestaurantsApiModule } from '@features/api/sys-admin/list-restaurants';
import { CommonApiDbModule } from '@common/api/db';
@Module({
  imports: [
    SysAdminAuthApiModule,
    SysAdminAddRestaurantApiModule,
    SysAdminEditRestaurantApiModule,
    SysAdminListRestaurantsApiModule,
    CommonApiDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
