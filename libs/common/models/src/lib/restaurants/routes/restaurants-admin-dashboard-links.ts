import { PmoDashBoardLinks } from '@common/models/common';
import { RestaurantsAdminDashBoardRoutes } from './restaurants-admin-dashboard.routes.models';

export const SysAdminDashBoardLinks: PmoDashBoardLinks[] = [
  {
    label: 'Orders List',
    icon: 'list',
    route: RestaurantsAdminDashBoardRoutes.ORDERS,
  },
] as const;
