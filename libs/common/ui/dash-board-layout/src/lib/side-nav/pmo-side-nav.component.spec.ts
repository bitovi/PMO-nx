import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoSideNavComponent } from './pmo-side-nav.component';

describe('PmoSideNavComponent', () => {
  let component: PmoSideNavComponent;
  let fixture: ComponentFixture<PmoSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoSideNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
