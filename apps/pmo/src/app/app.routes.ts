import { Route } from '@angular/router';
import { PmoRootRoutes } from '@common/models/pmo/routes';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/${PmoRootRoutes.HOME}`,
  },

  {
    path: '',
    loadComponent: () =>
      import('@features/pmo/main-layout').then((m) => m.PmoMainLayoutComponent),
    children: [
      {
        path: PmoRootRoutes.HOME,
        loadComponent: () =>
          import('@features/pmo/home').then((m) => m.PmoHomeComponent),
      },
      {
        path: PmoRootRoutes.RESTAURANTS_LIST,
        loadComponent: () =>
          import('@features/pmo/restaurants-list').then(
            (m) => m.PmoRestaurantsListComponent,
          ),
      },
      {
        path: PmoRootRoutes.RESTAURANT_DETAIL,
        loadComponent: () =>
          import('@features/pmo/restaurant-detail').then(
            (m) => m.PmoRestaurantDetailComponent,
          ),
      },
      {
        path: PmoRootRoutes.ORDER_DETAIL,
        loadComponent: () =>
          import('@features/pmo/order-detail').then(
            (m) => m.PmoOrderDetailComponent,
          ),
      },
      {
        path: PmoRootRoutes.MY_ORDERS_HISTORY,
        loadComponent: () =>
          import('@features/pmo/my-order-history').then(
            (m) => m.PmoMyOrderHistoryComponent,
          ),
      },
      {
        path: PmoRootRoutes.NOT_FOUND,
        loadComponent: () =>
          import('@features/pmo/not-found').then((m) => m.PmoNotFoundComponent),
      },
      {
        path: PmoRootRoutes.ERROR,
        loadComponent: () =>
          import('@features/pmo/error').then((m) => m.PmoErrorComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: `/${PmoRootRoutes.NOT_FOUND}`,
  },
];
