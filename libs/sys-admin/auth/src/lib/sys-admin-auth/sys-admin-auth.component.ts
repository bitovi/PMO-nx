import { Component, inject, resource, signal } from '@angular/core';
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
import { Router } from '@angular/router';
import { SysAdminAuthService } from '../service/sys-admin-auth.service';

@Component({
  selector: 'lib-sys-admin-auth',
  standalone: true,
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
  templateUrl: './sys-admin-auth.component.html',
  styleUrl: './sys-admin-auth.component.scss',
})
export class SysAdminAuthComponent {
  private authService = inject(SysAdminAuthService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  authForm = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  isLoading = signal(false);

  onSubmit() {
    if (this.authForm.valid && name) {
      const name = this.authForm.controls.name.value;
      resource({
        loader: () => ({ name }),
        request:()=>
      });
    }
  }
}
