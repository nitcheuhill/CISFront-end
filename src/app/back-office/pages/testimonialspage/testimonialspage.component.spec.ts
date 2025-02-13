import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialspageComponent } from './testimonialspage.component';

describe('TestimonialspageComponent', () => {
  let component: TestimonialspageComponent;
  let fixture: ComponentFixture<TestimonialspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
