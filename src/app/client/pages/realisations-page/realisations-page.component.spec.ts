import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationsPageComponent } from './realisations-page.component';

describe('RealisationsPageComponent', () => {
  let component: RealisationsPageComponent;
  let fixture: ComponentFixture<RealisationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealisationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
