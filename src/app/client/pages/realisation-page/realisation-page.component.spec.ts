import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationPageComponent } from './realisation-page.component';

describe('RealisationPageComponent', () => {
  let component: RealisationPageComponent;
  let fixture: ComponentFixture<RealisationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealisationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
