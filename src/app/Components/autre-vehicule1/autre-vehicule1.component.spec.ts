import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreVehicule1Component } from './autre-vehicule1.component';

describe('AutreVehicule1Component', () => {
  let component: AutreVehicule1Component;
  let fixture: ComponentFixture<AutreVehicule1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutreVehicule1Component]
    });
    fixture = TestBed.createComponent(AutreVehicule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
