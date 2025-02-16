import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccessModalComponent } from './edit-access-modal.component';

describe('EditAccessModalComponent', () => {
  let component: EditAccessModalComponent;
  let fixture: ComponentFixture<EditAccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAccessModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
