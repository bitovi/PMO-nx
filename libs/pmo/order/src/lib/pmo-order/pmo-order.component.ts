import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { PmoCreateOrderRequest } from '@common/models/pmo/orders';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RestaurantService } from '../services/restaurant.service';
import { PmoHttpStatus, Restaurant } from '@common/models/common';
import { OrderService } from '../services/order.service';
import { PmoRootRoutes } from '@common/models/pmo/routes';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

interface ItemFormGroup {
  id: FormControl<string>;
  name: FormControl<string>;
  quantity: FormControl<number>;
  price: FormControl<number>;
}
interface CreateOrderFormGroup {
  customer: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    phoneNumber: FormControl<string>;
    address: FormControl<string>;
  }>;
  items: FormArray<FormGroup<ItemFormGroup>>;
}
@Component({
  selector: 'lib-pmo-order',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  templateUrl: './pmo-order.component.html',
  styleUrl: './pmo-order.component.scss',
})
export class PmoOrderComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly restaurantService = inject(RestaurantService);
  private readonly orderService = inject(OrderService);
  private readonly snackBar = inject(MatSnackBar);

  restaurant = toSignal(
    this.activatedRoute.paramMap.pipe(
      map((params) => params.get('restaurantId')),
      filter((id): id is string => id !== null && id !== undefined),
      switchMap((id) =>
        this.restaurantService.getRestaurants(id).pipe(
          filter((response) => response.status === PmoHttpStatus.OK),
          map((response) => response.data),
        ),
      ),
    ),
  );

  orderForm: FormGroup<CreateOrderFormGroup> = this.createOrderForm();

  totalPrice = toSignal(
    this.orderForm.controls.items.valueChanges.pipe(
      map((items) =>
        items.reduce(
          (total, item) => total + (item.quantity ?? 0) * (item.price ?? 0),
          0,
        ),
      ),
    ),
  );

  private createOrderForm() {
    return this.fb.nonNullable.group<CreateOrderFormGroup>({
      customer: this.fb.nonNullable.group({
        name: this.fb.nonNullable.control<string>('', [Validators.required]),
        email: this.fb.nonNullable.control<string>('', [
          Validators.required,
          Validators.email,
        ]),
        phoneNumber: this.fb.nonNullable.control<string>('', [
          Validators.required,
        ]),
        address: this.fb.nonNullable.control<string>('', [Validators.required]),
      }),
      items: this.fb.nonNullable.array<FormGroup<ItemFormGroup>>([]),
    });
  }

  addItem(menu: { name: string; price: number }): void {
    const itemsArray = this.orderForm.controls.items;
    const existingItemIndex = itemsArray.controls.findIndex(
      (item) => item.controls.id.value === menu.name,
    );
    const newQuantity =
      existingItemIndex !== -1
        ? (itemsArray.at(existingItemIndex).controls.quantity.value ?? 0 + 1)
        : 1;

    const newItem = this.fb.nonNullable.group<ItemFormGroup>({
      id: this.fb.nonNullable.control<string>(menu.name),
      name: this.fb.nonNullable.control<string>(menu.name),
      quantity: this.fb.nonNullable.control<number>(newQuantity),
      price: this.fb.nonNullable.control<number>(menu.price),
    });

    itemsArray.push(newItem);
  }

  removeItem(menu: { name: string }): void {
    const itemsArray = this.orderForm.controls.items;
    const existingItemIndex = itemsArray.controls.findIndex(
      (item) => item.controls.id.value === menu.name,
    );
    if (existingItemIndex !== -1) itemsArray.removeAt(existingItemIndex);
  }

  /**
   * Submits the order if the form is valid
   */
  submitOrder(restaurantId: string): void {
    if (
      this.orderForm.invalid ||
      this.orderForm.controls.items.controls.length === 0
    ) {
      this.orderForm.markAllAsTouched();
      return;
    }

    const orderRequest: PmoCreateOrderRequest = {
      restaurantId,
      ...this.orderForm.getRawValue(),
    };
    this.orderService.createOrder(orderRequest).subscribe({
      next: (response) => {
        if (response.status === PmoHttpStatus.OK) {
          this.router.navigate([`/${PmoRootRoutes.MY_ORDERS_HISTORY}`]);
        } else {
          this.snackBar.open(
            'Failed to create order. Please try again.',
            'Close',
            { duration: 3000 },
          );
        }
      },
      error: () => {
        this.snackBar.open(
          'Failed to create order. Please try again.',
          'Close',
          { duration: 3000 },
        );
      },
    });
  }
}
