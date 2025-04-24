import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoMyOrderHistoryComponent } from './pmo-my-order-history.component';

describe('PmoMyOrderHistoryComponent', () => {
  let component: PmoMyOrderHistoryComponent;
  let fixture: ComponentFixture<PmoMyOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoMyOrderHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoMyOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
