import { Controller, Get, Delete, Param } from '@nestjs/common';
import { SysAdminListRestaurantsApiService } from './sys-admin-list-restaurants-api.service';
import { PmoResponse, Restaurant } from '@common/models/common';

@Controller('sys-admin/restaurants')
export class SysAdminListRestaurantsApiController {
  constructor(
    private sysAdminListRestaurantsApiService: SysAdminListRestaurantsApiService,
  ) {}

  @Get()
  getRestaurants(): PmoResponse<Restaurant[]> {
    return this.sysAdminListRestaurantsApiService.getRestaurants();
  }

  @Delete(':id')
  deleteRestaurant(@Param('id') id: string): PmoResponse<null> {
    return this.sysAdminListRestaurantsApiService.deleteRestaurant(id);
  }
}
