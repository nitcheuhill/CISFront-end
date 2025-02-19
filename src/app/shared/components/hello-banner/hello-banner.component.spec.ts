import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBannerComponent } from './hello-banner.component';

describe('HelloBannerComponent', () => {
  let component: HelloBannerComponent;
  let fixture: ComponentFixture<HelloBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
