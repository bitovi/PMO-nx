import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { RestaurantsAdminRootRoutes } from '@common/models/restaurants/routes';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const authStateService = inject(AuthStateService);
  const router = inject(Router);

  return authStateService.isConnected$.pipe(
    map((isConnected) => {
      if (!isConnected) {
        const loginPath = router.parseUrl(
          `/${RestaurantsAdminRootRoutes.AUTH}`,
        );
        return new RedirectCommand(loginPath);
      }
      return true;
    }),
  );
};
