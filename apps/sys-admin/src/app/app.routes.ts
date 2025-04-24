import { Route } from '@angular/router';

export const AppRouteType = {
  ADD_RESTAURANT: 'add-restaurant',
  RESTAURANT_LIST: 'restaurant-list',
  EDIT_RESTAURANTS: 'edit-restaurant',
  AUTH: 'auth',
} as const;

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: `/${AppRouteType.AUTH}`,
    pathMatch: 'full',
  },
  {
    path: AppRouteType.AUTH,
    loadComponent: () =>
      import('@features/sys-admin/auth').then((m) => m.SysAdminAuthComponent),
  },
  {
    path: AppRouteType.ADD_RESTAURANT,
    loadComponent: () =>
      import('@features/sys-admin/add-restaurant').then(
        (m) => m.SysAdminAddRestaurantComponent
      ),
  },
  {
    path: AppRouteType.EDIT_RESTAURANTS,
    loadComponent: () =>
      import('@features/sys-admin/edit-restaurant').then(
        (m) => m.SysAdminEditRestaurantComponent
      ),
  },
  {
    path: AppRouteType.RESTAURANT_LIST,
    loadComponent: () =>
      import('@features/sys-admin/list-restaurants').then(
        (m) => m.SysAdminListRestaurantsComponent
      ),
  },
];
