import {
  signal,
  Injectable,
  inject,
  computed,
  DestroyRef,
} from '@angular/core';
import { OrdersByRestaurantsResponse } from '@common/models/restaurants/orders';
import { AuthStateService } from '@features/restaurants-admin/auth';
import { RestaurantsAdminOrdersService } from '../services/restaurants-admin-orders.service';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  switchMap,
  takeUntil,
} from 'rxjs';
import { PmoHttpStatus } from '@common/models/common';

interface OrdersState {
  state: {
    orders: OrdersByRestaurantsResponse[];
    status: 'idl' | 'loading' | 'loaded' | 'error';
    error: string | null;
  };
  actions:
    | {
        type: 'fetchOrders';
      }
    | {
        type: 'fetchOrdersSuccess';
        orders: OrdersByRestaurantsResponse[];
      }
    | {
        type: 'fetchOrdersFailure';
        error: string;
      }
    | {
        type: 'updateOrderStatus';
        orderId: string;
        newStatus: OrdersByRestaurantsResponse['status'];
      }
    | {
        type: 'updateOrderStatusSuccess';
      }
    | {
        type: 'updateOrderStatusFailure';
        error: string;
      };
}

const initialState: OrdersState['state'] = {
  orders: [],
  status: 'idl',
  error: null,
};
@Injectable()
export class RestaurantsAdminOrdersStateService {
  private readonly state = signal<OrdersState['state']>(initialState);

  private readonly restaurantAuthState = inject(AuthStateService);
  private readonly restaurantOrdersService = inject(
    RestaurantsAdminOrdersService,
  );

  private readonly destroyRef$ = new BehaviorSubject<void>(undefined);

  readonly orders = computed(() => this.state().orders);
  readonly status = computed(() => this.state().status);
  readonly error = computed(() => this.state().error);

  dispatch(action: OrdersState['actions']) {
    switch (action.type) {
      case 'fetchOrders': {
        this.state.update((state) => ({
          ...state,
          status: 'loading',
          error: null,
        }));
        const restaurantId$ =
          this.restaurantAuthState.connectedRestaurant$.pipe(
            map((restaurant) => restaurant.id),
          );
        this.fetchOrders(restaurantId$);
        break;
      }
      case 'fetchOrdersSuccess':
        this.state.update((state) => ({
          ...state,
          orders: action.orders,
          status: 'loaded',
        }));
        break;
      case 'fetchOrdersFailure':
        this.state.update((state) => ({
          ...state,
          status: 'error',
          error: action.error,
        }));
        break;
      case 'updateOrderStatus':
        this.updateOrderStatus(action.orderId, action.newStatus);
        break;
      case 'updateOrderStatusSuccess':
        this.dispatch({ type: 'fetchOrders' });
        break;
      case 'updateOrderStatusFailure':
        this.state.update((state) => ({
          ...state,
          status: 'error',
          error: action.error,
        }));
        break;
    }
  }

  private updateOrderStatus(
    orderId: string,
    newStatus: OrdersByRestaurantsResponse['status'],
  ) {
    this.restaurantOrdersService
      .updateOrderStatus(orderId, newStatus)
      .pipe(
        map((response) => {
          if (response.status !== PmoHttpStatus.OK) {
            this.dispatch({
              type: 'updateOrderStatusFailure',
              error: response.message || 'Failed to update order status',
            });
            return;
          }

          this.dispatch({
            type: 'updateOrderStatusSuccess',
          });
        }),
        catchError((error) => {
          this.dispatch({
            type: 'updateOrderStatusFailure',
            error:
              error.message || 'An error occurred while updating order status',
          });
          return [];
        }),
      )
      .subscribe();
  }

  private fetchOrders(restaurantId$: Observable<string>) {
    restaurantId$
      .pipe(
        switchMap((restaurantId) => {
          console.log('Fetching orders for restaurant:', restaurantId);
          return this.restaurantOrdersService.getOrdersByRestaurant(
            restaurantId,
          );
        }),
        // takeUntil(this.destroyRef$),
        map((response) => {
          if (response.status !== PmoHttpStatus.OK) {
            this.dispatch({
              type: 'fetchOrdersFailure',
              error: response.message || 'Failed to fetch orders',
            });
            return;
          }

          this.dispatch({
            type: 'fetchOrdersSuccess',
            orders: response.data,
          });
        }),
        catchError((error) => {
          this.dispatch({
            type: 'fetchOrdersFailure',
            error: error.message || 'An error occurred while fetching orders',
          });
          return [];
        }),
      )
      .subscribe();
  }
}
