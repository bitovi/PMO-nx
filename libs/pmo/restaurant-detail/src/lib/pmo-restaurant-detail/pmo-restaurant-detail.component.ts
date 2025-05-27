import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { PmoHttpStatus, Restaurant } from '@common/models/common';
import { RestaurantDetailService } from '../services/restaurant-detail.service';

interface OrderItemForm {
  id: FormControl<string | null>;
  name: FormControl<string | null>;
  price: FormControl<number | null>;
  quantity: FormControl<number | null>;
}

interface CustomerForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  address: FormControl<string | null>;
}

interface OrderForm {
  customer: FormGroup<CustomerForm>;
  items: FormArray<FormGroup<OrderItemForm>>;
}

@Component({
  selector: 'lib-pmo-restaurant-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDividerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './pmo-restaurant-detail.component.html',
  styleUrl: './pmo-restaurant-detail.component.scss',
})
export class PmoRestaurantDetailComponent implements OnInit {
  orderForm: FormGroup<OrderForm>;
  restaurant: Restaurant | null = null;
  loading$ = new BehaviorSubject<boolean>(true);
  submitting$ = new BehaviorSubject<boolean>(false);
  error$ = new BehaviorSubject<string | null>(null);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantDetailService,
    private snackBar: MatSnackBar,
  ) {
    this.orderForm = this.createOrderForm();
  }

  ngOnInit(): void {
    this.loading$.next(true);
    this.route.params
      .pipe(
        switchMap((params) => {
          const restaurantId = params['id'];
          if (!restaurantId) {
            this.error$.next('Restaurant ID not provided');
            return of(null);
          }
          return this.restaurantService.getRestaurant(restaurantId);
        }),
        tap((restaurant) => {
          if (restaurant) {
            this.restaurant = restaurant;
            this.error$.next(null);
          }
        }),
        catchError((error) => {
          console.error('Error loading restaurant:', error);
          this.error$.next('Failed to load restaurant details');
          return of(null);
        }),
        finalize(() => this.loading$.next(false)),
      )
      .subscribe();
  }

  private createOrderForm(): FormGroup<OrderForm> {
    return this.fb.group<OrderForm>({
      customer: this.fb.group<CustomerForm>({
        name: this.fb.control<string | null>('', [Validators.required]),
        email: this.fb.control<string | null>('', [
          Validators.required,
          Validators.email,
        ]),
        phoneNumber: this.fb.control<string | null>('', [Validators.required]),
        address: this.fb.control<string | null>('', [Validators.required]),
      }),
      items: this.fb.array<FormGroup<OrderItemForm>>([]),
    });
  }

  addItem(item: { id: string; name: string; price: number }): void {
    const existingItemIndex = this.findItemIndex(item.id);

    if (existingItemIndex !== -1) {
      const existingItem = this.items.controls[existingItemIndex];
      const currentQuantity = existingItem.get('quantity')?.value || 0;
      existingItem.get('quantity')?.setValue(currentQuantity + 1);
    } else {
      const newItem = this.fb.group<OrderItemForm>({
        id: this.fb.control<string | null>(item.id),
        name: this.fb.control<string | null>(item.name),
        price: this.fb.control<number | null>(item.price),
        quantity: this.fb.control<number | null>(1),
      });
      this.items.push(newItem);
    }
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  adjustQuantity(index: number, change: number): void {
    const item = this.items.at(index);
    const currentQuantity = item.get('quantity')?.value || 0;
    const newQuantity = Math.max(1, currentQuantity + change);
    item.get('quantity')?.setValue(newQuantity);
  }

  clearItems(): void {
    while (this.items.length !== 0) {
      this.items.removeAt(0);
    }
  }

  private findItemIndex(id: string): number {
    return this.items.controls.findIndex(
      (control) => control.get('id')?.value === id,
    );
  }

  get items(): FormArray<FormGroup<OrderItemForm>> {
    return this.orderForm.get('items') as FormArray<FormGroup<OrderItemForm>>;
  }

  get totalPrice(): number {
    return this.items.controls.reduce((total, item) => {
      const price = item.get('price')?.value || 0;
      const quantity = item.get('quantity')?.value || 0;
      return total + price * quantity;
    }, 0);
  }

  get customerForm(): FormGroup {
    return this.orderForm.get('customer') as FormGroup;
  }

  submitOrder(): void {
    if (this.orderForm.invalid) {
      this.markFormGroupTouched(this.orderForm);
      return;
    }

    if (this.items.length === 0) {
      this.snackBar.open(
        'Please add at least one item to your order',
        'Close',
        {
          duration: 3000,
        },
      );
      return;
    }

    this.submitting$.next(true);

    if (!this.restaurant?.id) {
      this.snackBar.open('Restaurant information is missing', 'Close', {
        duration: 3000,
      });
      return;
    }

    const orderData = {
      restaurantId: this.restaurant.id,
      customer: {
        name: this.customerForm.get('name')?.value || '',
        email: this.customerForm.get('email')?.value || '',
        phoneNumber: this.customerForm.get('phoneNumber')?.value || '',
        address: this.customerForm.get('address')?.value || '',
      },
      items: this.items.controls.map((item) => {
        return {
          id: item.get('id')?.value || '',
          name: item.get('name')?.value || '',
          quantity: item.get('quantity')?.value || 0,
          price: item.get('price')?.value || 0,
        };
      }),
    };

    this.restaurantService
      .placeOrder(orderData)
      .pipe(
        tap((response) => {
          if (response.status === PmoHttpStatus.OK) {
            this.snackBar.open('Order placed successfully!', 'Close', {
              duration: 3000,
            });
            this.orderForm.reset();
            this.clearItems();
            // Navigate to order confirmation or my orders page
            this.router.navigate(['/my-orders-history']);
          } else {
            this.snackBar.open(
              response.message || 'Failed to place order',
              'Close',
              {
                duration: 5000,
              },
            );
          }
        }),
        catchError((error) => {
          console.error('Error placing order:', error);
          this.snackBar.open(
            'An error occurred while placing your order. Please try again.',
            'Close',
            {
              duration: 5000,
            },
          );
          return of(null);
        }),
        finalize(() => this.submitting$.next(false)),
      )
      .subscribe();
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
