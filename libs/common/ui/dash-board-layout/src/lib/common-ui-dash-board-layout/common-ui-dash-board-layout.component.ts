import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmoSideNavComponent } from '../side-nav/pmo-side-nav.component';
import { SideNavLinksComponent } from '../side-nav-links/side-nav-links.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { PmoDashBoardLinks } from '@common/models/common';

@Component({
  selector: 'common-ui-dash-board-layout',
  imports: [
    CommonModule,
    PmoSideNavComponent,
    SideNavLinksComponent,
    SideNavLinksComponent,
    RouterModule,
  ],
  templateUrl: './common-ui-dash-board-layout.component.html',
  styleUrl: './common-ui-dash-board-layout.component.scss',
})
export class CommonUiDashBoardLayoutComponent {
  activatedRoute = inject(ActivatedRoute);

  title$ = this.activatedRoute.data.pipe(
    map((data) => data['title'] as string),
  );
  links$ = this.activatedRoute.data.pipe(
    map((data) => data['links'] as PmoDashBoardLinks[]),
  );
}
