import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PmoRootRoutes } from '@common/models/pmo/routes';

@Component({
  selector: 'lib-pmo-main-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './pmo-main-layout.component.html',
  styleUrl: './pmo-main-layout.component.scss',
})
export class PmoMainLayoutComponent {
  pmoRootRoutes = PmoRootRoutes;
}
