import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule, UrlSegment } from '@angular/router';
import { PmoDashBoardLinks } from '@common/models/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'common-ui-side-nav-links',
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './side-nav-links.component.html',
  styleUrl: './side-nav-links.component.scss',
})
export class SideNavLinksComponent {
  dashBoardLinks = input<PmoDashBoardLinks[]>();
}
