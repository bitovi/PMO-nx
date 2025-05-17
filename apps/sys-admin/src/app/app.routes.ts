import { Route } from '@angular/router';
import {
  SysAdminRootRoutes,
  SysAdminDashBoardRoutes,
} from '@common/models/sys-admin/routes';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: `/${SysAdminRootRoutes.AUTH}`,
    pathMatch: 'full',
  },
  {
    path: SysAdminRootRoutes.AUTH,
    loadComponent: () =>
      import('@features/sys-admin/auth').then((m) => m.SysAdminAuthComponent),
  },

  {
    path: SysAdminRootRoutes.DAHS_BOARD,
    children: [
      {
        path: SysAdminDashBoardRoutes.ADD_RESTAURANT,
        loadComponent: () =>
          import('@features/sys-admin/add-restaurant').then(
            (m) => m.SysAdminAddRestaurantComponent,
          ),
      },
      {
        path: SysAdminDashBoardRoutes.EDIT_RESTAURANTS,
        loadComponent: () =>
          import('@features/sys-admin/edit-restaurant').then(
            (m) => m.SysAdminEditRestaurantComponent,
          ),
      },
      {
        path: SysAdminDashBoardRoutes.RESTAURANT_LIST,
        loadComponent: () =>
          import('@features/sys-admin/list-restaurants').then(
            (m) => m.SysAdminListRestaurantsComponent,
          ),
      },
    ],
  },
];
