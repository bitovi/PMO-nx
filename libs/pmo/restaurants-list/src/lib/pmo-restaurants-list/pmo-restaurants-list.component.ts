import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsService } from '../services/restaurants.service';
import { Restaurant } from '@common/models/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { PmoRootRoutes } from '@common/models/pmo/routes';

@Component({
  selector: 'lib-pmo-restaurants-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    RouterLink,
  ],
  templateUrl: './pmo-restaurants-list.component.html',
  styleUrl: './pmo-restaurants-list.component.scss',
})
export class PmoRestaurantsListComponent implements OnInit {
  private restaurantsService = inject(RestaurantsService);
  pmoRoutes = PmoRootRoutes;

  restaurants = signal<Restaurant[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.fetchRestaurants();
  }

  fetchRestaurants(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.restaurantsService.getRestaurants().subscribe({
      next: (response) => {
        this.restaurants.set(response.data || []);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load restaurants. Please try again later.');
        this.isLoading.set(false);
        console.error('Error fetching restaurants:', err);
      },
    });
  }
}
