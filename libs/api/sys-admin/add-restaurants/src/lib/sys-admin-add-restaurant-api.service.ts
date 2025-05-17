import { Injectable } from '@nestjs/common';
import { CommonApiDbService } from '@common/api/db';
import {
  SysAdminListRestaurantResponse,
  SysAdminAddRestaurantRequest,
} from '@common/models/sys-admin/restaurants';
import { PmoHttpStatus, PmoResponse } from '@common/models/common';

@Injectable()
export class SysAdminAddRestaurantApiService {
  constructor(private dbService: CommonApiDbService) {}

  addRestaurant(
    addRestaurantRequest: SysAdminAddRestaurantRequest,
  ): PmoResponse<SysAdminListRestaurantResponse[]> {
    const restaurants = this.dbService.addRestaurant(addRestaurantRequest);
    return {
      status: PmoHttpStatus.OK,
      data: restaurants,
      message: 'Restaurant added successfully',
      error: undefined,
    };
  }
}
