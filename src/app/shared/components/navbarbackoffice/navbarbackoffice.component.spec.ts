import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbackofficeComponent } from './navbarbackoffice.component';

describe('NavbarbackofficeComponent', () => {
  let component: NavbarbackofficeComponent;
  let fixture: ComponentFixture<NavbarbackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarbackofficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarbackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
