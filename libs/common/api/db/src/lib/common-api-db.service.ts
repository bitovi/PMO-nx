import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Restaurant, SysAdminModel } from '@common/models/common';
import { SysAdminsMocks } from './mocks/sys-admins.mock';
import { mockRestaurants } from './mocks/restaurants.mock';
import {
  SysAdminAddRestaurantRequest,
  SysAdminListRestaurantResponse,
} from '@common/models/sys-admin/restaurants';

@Injectable()
export class CommonApiDbService {
  private sysAdmins: SysAdminModel[] = SysAdminsMocks;
  private restaurants: Restaurant[] = mockRestaurants;

  getSysAdminByNameOrEmail(name: string): SysAdminModel | undefined {
    return this.sysAdmins.find(
      (sysAdmin) => sysAdmin.name === name || sysAdmin.email === name,
    );
  }

  addRestaurant(
    addRestaurantRequest: SysAdminAddRestaurantRequest,
  ): SysAdminListRestaurantResponse[] {
    const newRestaurant: Restaurant = {
      ...addRestaurantRequest,
      id: `${this.restaurants.length + 1}`,
    };
    this.restaurants.push(newRestaurant);
    return [...this.restaurants];
  }

  getRestaurants(): SysAdminListRestaurantResponse[] {
    return [...this.restaurants];
  }

  deleteRestaurant(id: string): SysAdminListRestaurantResponse[] {
    const restaurantIndex = this.restaurants.findIndex(
      (restaurant) => restaurant.id === id,
    );
    if (restaurantIndex === -1) {
      throw new HttpException(
        `Restaurant with id ${id} not found`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    this.restaurants.splice(restaurantIndex, 1);
    return [...this.restaurants];
  }
}
