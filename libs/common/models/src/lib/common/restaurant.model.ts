import { AddressModel } from './address.model';
import { RestaurantMenuModel } from './restaurant-menu.model';

export interface Restaurant {
  name: string;
  slug: string;
  menu: RestaurantMenuModel;
  address: AddressModel;
  id: string;
}
