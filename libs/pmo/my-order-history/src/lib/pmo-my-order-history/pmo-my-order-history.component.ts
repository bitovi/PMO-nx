import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  catchError,
  finalize,
  of,
  tap,
} from 'rxjs';
import { OrderModel, OrderStatus, PmoResponse } from '@common/models/common';
import { PmoMyOrderHistoryService } from './pmo-my-order-history.service';

// Angular Material imports
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'lib-pmo-my-order-history',
  templateUrl: './pmo-my-order-history.component.html',
  styleUrl: './pmo-my-order-history.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatChipsModule,
  ],
})
export class PmoMyOrderHistoryComponent implements OnInit {
  // Column names for the order history table
  displayedColumns: string[] = [
    'id',
    'restaurantId',
    'items',
    'totalPrice',
    'status',
  ];

  // Data sources
  orders: OrderModel[] = [];
  loading$ = new BehaviorSubject<boolean>(false);
  error$ = new BehaviorSubject<string | null>(null);

  // Form for filtering orders
  filterForm!: FormGroup;

  // Order status enum for display
  orderStatus = OrderStatus;

  constructor(
    private orderHistoryService: PmoMyOrderHistoryService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    // Initialize the filter form
    this.filterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * Get order history for a specific user email
   */
  getOrderHistory(): void {
    if (this.filterForm.invalid) {
      return;
    }

    const email = this.filterForm.get('email')?.value;
    this.loading$.next(true);
    this.error$.next(null);

    this.orderHistoryService
      .getOrderHistory(email)
      .pipe(
        tap((response: PmoResponse<OrderModel[]>) => {
          this.orders = response.data;

          if (this.orders.length === 0) {
            this.error$.next('No orders found for this email.');
          }
        }),
        catchError((err) => {
          this.error$.next('Failed to load order history. Please try again.');
          console.error('Error fetching order history:', err);
          return of(null);
        }),
        finalize(() => this.loading$.next(false)),
      )
      .subscribe();
  }

  /**
   * Calculate the total quantity of items in an order
   */
  getTotalItems(items: { quantity: number }[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  /**
   * Get CSS class based on order status for styled display
   */
  getStatusClass(status: string): string {
    switch (status) {
      case OrderStatus.COMPLETED:
      case OrderStatus.DELIVERED:
        return 'status-success';
      case OrderStatus.PENDING:
      case OrderStatus.IN_PROGRESS:
        return 'status-pending';
      case OrderStatus.CANCELLED:
      case OrderStatus.REFUNDED:
      case OrderStatus.RETURNED:
        return 'status-error';
      default:
        return '';
    }
  }
}
