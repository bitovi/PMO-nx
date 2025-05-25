import { Route } from '@angular/router';
import {
  SysAdminDashBoardLinks,
  RestaurantsAdminDashBoardRoutes,
  RestaurantsAdminRootRoutes,
} from '@common/models/restaurants/routes';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: `/${RestaurantsAdminRootRoutes.DAHS_BOARD}`,
    pathMatch: 'full',
  },
  {
    path: RestaurantsAdminRootRoutes.AUTH,
    loadComponent: () =>
      import('@features/restaurants-admin/auth').then(
        (m) => m.RestaurantsAdminAuthComponent,
      ),
  },
  {
    path: RestaurantsAdminRootRoutes.DAHS_BOARD,
    loadComponent: () =>
      import('@common/ui/dash-board-layout').then(
        (m) => m.CommonUiDashBoardLayoutComponent,
      ),
    children: [
      {
        path: '',
        redirectTo: `${RestaurantsAdminDashBoardRoutes.ORDERS}`,
        pathMatch: 'full',
      },
      {
        path: `${RestaurantsAdminDashBoardRoutes.ORDERS}`,
        loadComponent: () =>
          import('@features/restaurants-admin/restaurant-orders').then(
            (c) => c.RestaurantsAdminRestaurantOrdersComponent,
          ),
      },
    ],
    data: {
      links: SysAdminDashBoardLinks,
      title: 'Restaurants admin',
    },
  },
];
