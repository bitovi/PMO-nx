import { Injectable } from '@angular/core';
import { Restaurant } from '@common/models/common';
import { BehaviorSubject, filter, map } from 'rxjs';

function saveRestaurantToLocalStorage(restaurant: Restaurant) {
  localStorage.setItem('connectedRestaurant', JSON.stringify(restaurant));
}

function getRestaurantFromLocalStorage(): Restaurant | null {
  const restaurant = localStorage.getItem('connectedRestaurant');
  return restaurant ? JSON.parse(restaurant) : null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly _connectedRestaurantState =
    new BehaviorSubject<Restaurant | null>(getRestaurantFromLocalStorage());

  private readonly _connectedRestaurantState$ =
    this._connectedRestaurantState.asObservable();

  connectedRestaurant$ = this._connectedRestaurantState$.pipe(
    filter((restaurant) => restaurant !== null),
  );

  isConnected$ = this._connectedRestaurantState$.pipe(
    map((restaurant) => restaurant !== null),
  );

  updateRestaurant(restaurant: Restaurant) {
    this._connectedRestaurantState.next(restaurant);
    saveRestaurantToLocalStorage(restaurant);
  }
}
