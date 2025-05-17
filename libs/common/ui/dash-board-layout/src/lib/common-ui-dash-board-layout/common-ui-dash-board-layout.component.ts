import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmoSideNavComponent } from '../side-nav/pmo-side-nav.component';

@Component({
  selector: 'common-ui-dash-board-layout',
  imports: [CommonModule, PmoSideNavComponent],
  templateUrl: './common-ui-dash-board-layout.component.html',
  styleUrl: './common-ui-dash-board-layout.component.scss',
})
export class CommonUiDashBoardLayoutComponent {}
