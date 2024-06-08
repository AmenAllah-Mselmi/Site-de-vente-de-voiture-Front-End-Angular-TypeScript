import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMotoComponent } from './edit-moto.component';

describe('EditMotoComponent', () => {
  let component: EditMotoComponent;
  let fixture: ComponentFixture<EditMotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMotoComponent]
    });
    fixture = TestBed.createComponent(EditMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
