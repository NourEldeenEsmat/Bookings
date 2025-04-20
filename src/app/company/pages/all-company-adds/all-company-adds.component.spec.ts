import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompanyAddsComponent } from './all-company-adds.component';

describe('AllCompanyAddsComponent', () => {
  let component: AllCompanyAddsComponent;
  let fixture: ComponentFixture<AllCompanyAddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCompanyAddsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCompanyAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
