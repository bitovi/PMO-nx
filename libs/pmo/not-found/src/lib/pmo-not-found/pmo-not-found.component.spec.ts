import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoNotFoundComponent } from './pmo-not-found.component';

describe('PmoNotFoundComponent', () => {
  let component: PmoNotFoundComponent;
  let fixture: ComponentFixture<PmoNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoNotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
