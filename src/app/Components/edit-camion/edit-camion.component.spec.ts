import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCamionComponent } from './edit-camion.component';

describe('EditCamionComponent', () => {
  let component: EditCamionComponent;
  let fixture: ComponentFixture<EditCamionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCamionComponent]
    });
    fixture = TestBed.createComponent(EditCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
