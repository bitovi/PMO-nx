import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'common-ui-pmo-side-nav',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './pmo-side-nav.component.html',
  styleUrl: './pmo-side-nav.component.scss',
})
export class PmoSideNavComponent {
  isSidenavOpen = signal(true);

  toggleSidenav() {
    this.isSidenavOpen.update((prev) => !prev);
  }
}
