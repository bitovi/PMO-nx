import { Route } from '@angular/router';

export const AppRoutesType = {
  AUTH: 'auth',
  ORDERS: 'orders',
} as const;

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: `/${AppRoutesType.AUTH}`,
    pathMatch: 'full',
  },
  {
    path: AppRoutesType.AUTH,
    loadComponent() {
      return import('@features/restaurants-admin/auth').then(
        (m) => m.RestaurantsAdminAuthComponent
      );
    },
  },
  {
    path: AppRoutesType.ORDERS,
    loadComponent() {
      return import('@features/restaurants-admin/restaurant-orders').then(
        (m) => m.RestaurantsAdminRestaurantOrdersComponent
      );
    },
  },
];
