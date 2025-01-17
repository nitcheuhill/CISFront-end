import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsBlock2Component } from './service-details-block2.component';

describe('ServiceDetailsBlock2Component', () => {
  let component: ServiceDetailsBlock2Component;
  let fixture: ComponentFixture<ServiceDetailsBlock2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailsBlock2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsBlock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
