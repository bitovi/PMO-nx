import { Body, Controller, Post } from '@nestjs/common';
import { SysAdminAddRestaurantApiService } from './sys-admin-add-restaurant-api.service';
import {
  SysAdminAddRestaurantRequest,
  SysAdminListRestaurantResponse,
} from '@common/models/sys-admin/restaurants';
import { PmoResponse } from '@common/models/common';

@Controller('restaurants')
export class SysAdminAddRestaurantApiController {
  constructor(
    private sysAdminAddRestaurantApiService: SysAdminAddRestaurantApiService,
  ) {}

  @Post('add')
  addRestaurant(
    @Body() addRestaurantRequest: SysAdminAddRestaurantRequest,
  ): PmoResponse<SysAdminListRestaurantResponse[]> {
    return this.sysAdminAddRestaurantApiService.addRestaurant(
      addRestaurantRequest,
    );
  }
}
