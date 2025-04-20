import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAdComponent } from './review-ad.component';

describe('ReviewAdComponent', () => {
  let component: ReviewAdComponent;
  let fixture: ComponentFixture<ReviewAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewAdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
