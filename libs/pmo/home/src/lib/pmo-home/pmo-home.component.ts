import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PmoRootRoutes } from '@common/models/pmo/routes';

@Component({
  selector: 'lib-pmo-home',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './pmo-home.component.html',
  styleUrl: './pmo-home.component.scss',
})
export class PmoHomeComponent {
  pmoRoutes = PmoRootRoutes;
}
