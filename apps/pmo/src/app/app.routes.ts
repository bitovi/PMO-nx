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
        path: `${PmoRootRoutes.ORDER}/:restaurantId`,
        loadComponent: () =>
          import('@features/pmo/order').then((m) => m.PmoOrderComponent),
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
    ],
  },
  {
    path: '**',
    redirectTo: `/${PmoRootRoutes.NOT_FOUND}`,
  },
];
