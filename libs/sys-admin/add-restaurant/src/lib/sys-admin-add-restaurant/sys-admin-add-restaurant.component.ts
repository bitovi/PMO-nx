import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
  FormControl,
  FormRecord,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { SysAdminAddRestaurantRequest } from '@common/models/sys-admin/restaurants';
import { AddRestaurantService } from '../services/add-restaurant.service';
import { PmoHttpStatus } from '@common/models/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SysAdminDashBoardRoutes } from '@common/models/sys-admin/routes';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// Define typed form interfaces
interface MenuItemForm {
  name: FormControl<string | null>;
  price: FormControl<number | null>;
}

interface AddressForm {
  state: FormControl<string | null>;
  city: FormControl<string | null>;
  street: FormControl<string | null>;
  zip: FormControl<string | null>;
}

interface MenuForm {
  lunch: FormArray<FormGroup<MenuItemForm>>;
  dinner: FormArray<FormGroup<MenuItemForm>>;
}

interface RestaurantForm {
  name: FormControl<string | null>;
  slug: FormControl<string | null>;
  address: FormGroup<AddressForm>;
  menu: FormGroup<MenuForm>;
}

@Component({
  selector: 'lib-sys-admin-add-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatSnackBarModule,
  ],
  templateUrl: './sys-admin-add-restaurant.component.html',
  styleUrl: './sys-admin-add-restaurant.component.scss',
})
export class SysAdminAddRestaurantComponent implements OnInit {
  private fb = inject(FormBuilder);
  private addRestaurantService = inject(AddRestaurantService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private toaster = inject(MatSnackBar);
  restaurantForm!: FormGroup<RestaurantForm>;

  ngOnInit(): void {
    this.restaurantForm = this.initForm();
  }

  initForm(): FormGroup<RestaurantForm> {
    return this.fb.group({
      name: this.fb.control<string | null>('', [Validators.required]),
      slug: this.fb.control<string | null>('', [Validators.required]),
      address: this.fb.group<AddressForm>({
        state: this.fb.control<string | null>('', [Validators.required]),
        city: this.fb.control<string | null>('', [Validators.required]),
        street: this.fb.control<string | null>('', [Validators.required]),
        zip: this.fb.control<string | null>('', [Validators.required]),
      }),
      menu: this.fb.group<MenuForm>({
        lunch: this.fb.array<FormGroup<MenuItemForm>>([]),
        dinner: this.fb.array<FormGroup<MenuItemForm>>([]),
      }),
    });
  }

  // Helper methods to access form arrays
  get lunchItems(): FormArray<FormGroup<MenuItemForm>> {
    return this.restaurantForm.controls.menu.controls.lunch;
  }

  get dinnerItems(): FormArray<FormGroup<MenuItemForm>> {
    return this.restaurantForm.controls.menu.controls.dinner;
  }

  // Methods to add menu items
  addLunchItem(): void {
    this.lunchItems.push(this.createMenuItem());
  }

  addDinnerItem(): void {
    this.dinnerItems.push(this.createMenuItem());
  }

  // Create a form group for menu item
  createMenuItem(): FormGroup<MenuItemForm> {
    return this.fb.group<MenuItemForm>({
      name: this.fb.control<string | null>('', [Validators.required]),
      price: this.fb.control<number | null>(null, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  // Remove menu items
  removeLunchItem(index: number): void {
    this.lunchItems.removeAt(index);
  }

  removeDinnerItem(index: number): void {
    this.dinnerItems.removeAt(index);
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      // Convert form value to SysAdminAddRestaurantRequest
      const formValue = this.restaurantForm.getRawValue();

      const restaurantData = this.buildRestaurantPayload(formValue);
      this.addRestaurantService
        .addRestaurant(restaurantData)
        .subscribe((response) => {
          if (response.status === PmoHttpStatus.OK) {
            this.router.navigate(
              [`../${SysAdminDashBoardRoutes.RESTAURANT_LIST}`],
              { relativeTo: this.activatedRoute },
            );
          } else {
            this.toaster.open(response.message ?? 'Error', 'Close', {});
          }
        });
    } else {
      this.restaurantForm.markAllAsTouched();
    }
  }

  private buildRestaurantPayload(formValue: {
    name: string | null;
    slug: string | null;
    address: {
      state: string | null;
      city: string | null;
      street: string | null;
      zip: string | null;
    };
    menu: {
      lunch: { name: string | null; price: number | null }[];
      dinner: { name: string | null; price: number | null }[];
    };
  }): SysAdminAddRestaurantRequest {
    return {
      name: formValue.name ?? '',
      slug: formValue.slug ?? '',
      address: {
        state: formValue.address?.state ?? '',
        city: formValue.address?.city ?? '',
        street: formValue.address?.street ?? '',
        zip: formValue.address?.zip ?? '',
      },
      menu: {
        lunch:
          formValue.menu?.lunch?.map((item) => ({
            name: item.name ?? '',
            price: Number(item.price),
          })) ?? [],
        dinner:
          formValue.menu?.dinner?.map((item) => ({
            name: item.name ?? '',
            price: Number(item.price),
          })) ?? [],
      },
    };
  }
}
