import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonUiDashBoardLayoutComponent } from './common-ui-dash-board-layout.component';

describe('CommonUiDashBoardLayoutComponent', () => {
  let component: CommonUiDashBoardLayoutComponent;
  let fixture: ComponentFixture<CommonUiDashBoardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonUiDashBoardLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonUiDashBoardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
