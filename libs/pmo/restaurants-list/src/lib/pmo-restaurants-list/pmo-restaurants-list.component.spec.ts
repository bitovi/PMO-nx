import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoRestaurantsListComponent } from './pmo-restaurants-list.component';

describe('PmoRestaurantsListComponent', () => {
  let component: PmoRestaurantsListComponent;
  let fixture: ComponentFixture<PmoRestaurantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoRestaurantsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoRestaurantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
