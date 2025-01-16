import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsBlock1Component } from './service-details-block1.component';

describe('ServiceDetailsBlock1Component', () => {
  let component: ServiceDetailsBlock1Component;
  let fixture: ComponentFixture<ServiceDetailsBlock1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailsBlock1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsBlock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
