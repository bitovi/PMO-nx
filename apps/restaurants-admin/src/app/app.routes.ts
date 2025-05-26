import { Route } from '@angular/router';
import {
  SysAdminDashBoardLinks,
  RestaurantsAdminDashBoardRoutes,
  RestaurantsAdminRootRoutes,
} from '@common/models/restaurants/routes';

import { authenticatedGuard } from '@features/restaurants-admin/auth-state';

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
    canActivate: [authenticatedGuard],
    loadComponent: () =>
      import('@common/ui/dash-board-layout').then(
        (m) => m.CommonUiDashBoardLayoutComponent,
      ),
    data: {
      links: SysAdminDashBoardLinks,
      title: 'Restaurants admin',
    },

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
  },
];
