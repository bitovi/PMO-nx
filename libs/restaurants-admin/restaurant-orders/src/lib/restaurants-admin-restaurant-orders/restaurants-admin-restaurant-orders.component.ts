import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrderModel, OrderStatus } from '@common/models/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RestaurantsAdminOrdersService } from '../services/restaurants-admin-orders.service';
import { RestaurantsAdminOrdersStateService } from './restaurants-admin-restaurant-orders-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-restaurants-admin-restaurant-orders',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './restaurants-admin-restaurant-orders.component.html',
  styleUrl: './restaurants-admin-restaurant-orders.component.scss',
  providers: [RestaurantsAdminOrdersStateService],
})
export class RestaurantsAdminRestaurantOrdersComponent {
  orderService = inject(RestaurantsAdminOrdersService);
  router = inject(Router);
  ordersStateService = inject(RestaurantsAdminOrdersStateService);

  displayedColumns: string[] = [
    'customer',
    'items',
    'totalPrice',
    'status',
    'actions',
  ];

  orderStatus = OrderStatus;

  constructor() {
    this.ordersStateService.dispatch({
      type: 'fetchOrders',
    });
  }

  moveOrder(orderId: 'string', newStatus: OrderModel['status']): void {
    this.ordersStateService.dispatch({
      type: 'updateOrderStatus',
      orderId,
      newStatus,
    });
  }
}
