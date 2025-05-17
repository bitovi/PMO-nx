interface Item {
  name: string;
  price: number;
}
export interface RestaurantMenuModel {
  lunch: Item[];
  dinner: Item[];
}
