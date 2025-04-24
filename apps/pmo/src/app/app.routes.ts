import { Route } from '@angular/router';

export const AppRouteTypes = {
  HOME: 'home',
  RESTAURANTS_LIST: 'restaurants-list',
  RESTAURANT_DETAIL: 'restaurant-detail',
  ORDER_DETAIL: 'order-detail',
  MY_ORDERS_HISTORY: 'my-orders-history',
  ERROR: 'error',
  NOT_FOUND: 'not-found',
} as const;

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/${AppRouteTypes.HOME}`,
  },
  {
    path: AppRouteTypes.HOME,
    loadComponent: () =>
      import('@features/pmo/home').then((m) => m.PmoHomeComponent),
  },
  {
    path: AppRouteTypes.RESTAURANTS_LIST,
    loadComponent: () =>
      import('@features/pmo/restaurants-list').then(
        (m) => m.PmoRestaurantsListComponent
      ),
  },
  {
    path: AppRouteTypes.RESTAURANT_DETAIL,
    loadComponent: () =>
      import('@features/pmo/restaurant-detail').then(
        (m) => m.PmoRestaurantDetailComponent
      ),
  },
  {
    path: AppRouteTypes.ORDER_DETAIL,
    loadComponent: () =>
      import('@features/pmo/order-detail').then(
        (m) => m.PmoOrderDetailComponent
      ),
  },
  {
    path: AppRouteTypes.MY_ORDERS_HISTORY,
    loadComponent: () =>
      import('@features/pmo/my-order-history').then(
        (m) => m.PmoMyOrderHistoryComponent
      ),
  },
  {
    path: AppRouteTypes.NOT_FOUND,
    loadComponent: () =>
      import('@features/pmo/not-found').then((m) => m.PmoNotFoundComponent),
  },
  {
    path: AppRouteTypes.ERROR,
    loadComponent: () =>
      import('@features/pmo/error').then((m) => m.PmoErrorComponent),
  },
  {
    path: '**',
    redirectTo: `/${AppRouteTypes.NOT_FOUND}`,
  },
];
