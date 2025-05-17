import { PmoDashBoardLinks } from '@common/models/common';
import { SysAdminDashBoardRoutes } from './sys-admin.routes.models';

export const SysAdminDashBoardLinks: PmoDashBoardLinks[] = [
  {
    label: 'Restaurants List',
    icon: 'list',
    route: SysAdminDashBoardRoutes.RESTAURANT_LIST,
  },
  {
    label: 'Add Restaurant',
    icon: 'add',
    route: SysAdminDashBoardRoutes.ADD_RESTAURANT,
  },
] as const;
