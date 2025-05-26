import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RestaurantsAuthService } from '../services/restaurants-auth.service';
import { Router } from '@angular/router';
import { PmoHttpStatus } from '@common/models/common';
import { RestaurantsAdminRootRoutes } from '@common/models/restaurants/routes';
import { AuthStateService } from '@features/restaurants-admin/auth-state';

@Component({
  selector: 'lib-restaurants-admin-auth',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './restaurants-admin-auth.component.html',
  styleUrl: './restaurants-admin-auth.component.scss',
})
export class RestaurantsAdminAuthComponent {
  private authService = inject(RestaurantsAuthService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private authStateService = inject(AuthStateService);

  authForm = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  isLoading = signal(false);

  onSubmit() {
    if (this.authForm.valid) {
      const name = this.authForm.controls.name.value;
      this.isLoading.set(true);

      this.authService.login({ name }).subscribe({
        next: (response) => {
          this.isLoading.set(false);
          if (response.status !== PmoHttpStatus.OK) {
            this.openErrorSnackBar(response.message);
            return;
          }

          this.authStateService.updateRestaurant(response.data);

          this.router.navigateByUrl(`${RestaurantsAdminRootRoutes.DAHS_BOARD}`);
          this.snackBar.open(response.message ?? 'Login success', 'Close', {
            duration: 3000,
          });
        },
        error: (error) => {
          this.isLoading.set(false);
          this.openErrorSnackBar(error.error.message || 'Login failed');
        },
      });
    }
  }

  private openErrorSnackBar(message?: string) {
    this.snackBar.open(message ?? 'Login failed', 'Close', {
      duration: 3000,
    });
  }
}
