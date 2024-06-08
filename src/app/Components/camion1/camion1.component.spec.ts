import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camion1Component } from './camion1.component';

describe('Camion1Component', () => {
  let component: Camion1Component;
  let fixture: ComponentFixture<Camion1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Camion1Component]
    });
    fixture = TestBed.createComponent(Camion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
