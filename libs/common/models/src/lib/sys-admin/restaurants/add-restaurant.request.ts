export interface SysAdminAddRestaurantRequest {
  name: string;
  slug: string;
  address: {
    state: string;
    city: string;
    street: string;
    zip: string;
  };
  menu: {
    lunch: { price: number; name: string }[];
    dinner: { price: number; name: string }[];
  };
}
