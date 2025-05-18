import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ListRestaurantsService } from '../services/list-restaurants.service';
import { SysAdminListRestaurantResponse } from '@common/models/sys-admin/restaurants';
import { delay, tap } from 'rxjs';
import { PmoHttpStatus } from '@common/models/common';

export interface RestaurantListState {
  state: {
    error?: string;
    status: 'error' | 'idle' | 'loading' | 'success';
    restaurants: SysAdminListRestaurantResponse[];
  };
  actions:
    | { type: 'fetchRestaurants' }
    | {
        type: 'fetchRestaurantsSuccess';
        restaurants: SysAdminListRestaurantResponse[];
      }
    | { type: 'fetchRestaurantsFailure'; error: string }
    | { type: 'deleteRestaurant'; id: string }
    | { type: 'deleteRestaurantSuccess' }
    | { type: 'deleteRestaurantFailure'; message: string };
}
@Component({
  selector: 'lib-sys-admin-list-restaurants',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  templateUrl: './sys-admin-list-restaurants.component.html',
  styleUrl: './sys-admin-list-restaurants.component.scss',
})
export class SysAdminListRestaurantsComponent implements OnInit {
  private readonly restaurantsService = inject(ListRestaurantsService);
  private readonly snackBar = inject(MatSnackBar);

  private readonly restaurantsState = signal<RestaurantListState['state']>({
    status: 'idle',
    restaurants: [],
  });

  isLoading = computed(() => this.restaurantsState().status === 'loading');
  restaurants = computed(() => this.restaurantsState().restaurants);

  displayedColumns = ['name', 'location', 'actions'];

  constructor() {
    effect(() => {
      if (this.restaurantsState().status === 'error')
        this.snackBar.open(this.restaurantsState().error ?? '', 'Close', {
          duration: 3000,
        });
      else if (this.restaurantsState().status === 'success')
        this.snackBar.open('Restaurants fetched successfully', 'Close', {
          duration: 3000,
        });
    });
  }

  ngOnInit(): void {
    this.dispatch({ type: 'fetchRestaurants' });
  }

  dispatch(action: RestaurantListState['actions']) {
    switch (action.type) {
      case 'fetchRestaurants':
        this.restaurantsState.update((state) => ({
          ...state,
          status: 'loading',
          error: undefined,
        }));
        this.fetchRestaurants();
        break;
      case 'fetchRestaurantsSuccess':
        this.restaurantsState.update((state) => ({
          ...state,
          status: 'success',
          error: undefined,
          restaurants: action.restaurants,
        }));
        break;
      case 'fetchRestaurantsFailure':
        this.restaurantsState.update((state) => ({
          ...state,
          status: 'error',
          error: action.error,
        }));
        break;
      case 'deleteRestaurant':
        this.restaurantsState.update((state) => ({
          ...state,
          status: 'loading',
          error: undefined,
        }));
        this.deleteRestaurant(action.id);
        break;
      case 'deleteRestaurantFailure':
        this.restaurantsState.update((state) => ({
          ...state,
          status: 'error',
          error: action.message,
        }));
        break;
      case 'deleteRestaurantSuccess':
        this.restaurantsState.update((state) => ({
          ...state,
          error: undefined,
          status: 'success',
        }));
        this.dispatch({ type: 'fetchRestaurants' });

        break;
      default:
        throw new Error(`Unknown action type`);
    }
  }

  private deleteRestaurant(id: string) {
    this.restaurantsService
      .deleteRestaurant(id)
      .pipe(delay(1000))
      .subscribe({
        next: (response) => {
          if (response.status !== PmoHttpStatus.OK) {
            this.dispatch({
              type: 'deleteRestaurantFailure',
              message: response.error ?? 'Failed to delete restaurant',
            });
            return;
          }
          this.dispatch({
            type: 'deleteRestaurantSuccess',
          });
        },
        error: (error) => {
          this.dispatch({
            type: 'deleteRestaurantFailure',
            message: error.error.message ?? 'Failed to delete restaurant',
          });
        },
      });
  }

  private fetchRestaurants() {
    this.restaurantsService
      .getRestaurants()
      .pipe(delay(1000))
      .subscribe({
        next: (response) => {
          if (response.status !== PmoHttpStatus.OK) {
            this.dispatch({
              type: 'fetchRestaurantsFailure',
              error: response.error ?? 'Failed to fetch restaurants',
            });
            return;
          }
          this.dispatch({
            type: 'fetchRestaurantsSuccess',
            restaurants: response.data,
          });
        },
        error: (error) => {
          this.dispatch({
            type: 'fetchRestaurantsFailure',
            error: error.error.message ?? 'Failed to fetch restaurants',
          });
        },
      });
  }
}
