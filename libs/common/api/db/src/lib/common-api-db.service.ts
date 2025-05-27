import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrderModel, Restaurant, SysAdminModel } from '@common/models/common';
import { SysAdminsMocks } from './mocks/sys-admins.mock';
import { mockRestaurants } from './mocks/restaurants.mock';
import {
  SysAdminAddRestaurantRequest,
  SysAdminListRestaurantResponse,
} from '@common/models/sys-admin/restaurants';
import { RestaurantLoginResponse } from '@common/models/restaurants';
import { OrdersByRestaurantsResponse } from '@common/models/restaurants/orders';
import { ordersMock } from './mocks/orders.mocks';

@Injectable()
export class CommonApiDbService {
  private sysAdmins: SysAdminModel[] = SysAdminsMocks;
  private restaurants: Restaurant[] = mockRestaurants;
  private orders: OrderModel[] = ordersMock;

  updateOrderStatus(
    orderId: string,
    newStatus: OrderModel['status'],
  ): OrderModel | undefined {
    const orderIndex = this.orders.findIndex((order) => order.id === orderId);
    if (orderIndex === -1) {
      return undefined;
    }
    const updatedOrder: OrderModel = {
      ...this.orders[orderIndex],
      status: newStatus,
    };
    this.orders.splice(orderIndex, 1, updatedOrder);
    return updatedOrder;
  }
  getOrdersByRestaurantId(restaurantId: string): OrdersByRestaurantsResponse[] {
    return [
      ...this.orders.filter((order) => order.restaurantId === restaurantId),
    ];
  }

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

  getRestaurantByName(name: string): RestaurantLoginResponse | undefined {
    return this.restaurants.find((restaurant) => restaurant.name === name);
  }

  getAllOrders(): OrderModel[] {
    return [...this.orders];
  }

  addOrder(order: Omit<OrderModel, 'id'>): OrderModel {
    const newOrder: OrderModel = {
      ...order,
      id: `${this.orders.length + 1}`,
    };
    this.orders.push(newOrder);
    return newOrder;
  }
}
