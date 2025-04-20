import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintDashboardComponent } from './clint-dashboard.component';

describe('ClintDashboardComponent', () => {
  let component: ClintDashboardComponent;
  let fixture: ComponentFixture<ClintDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClintDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClintDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
