import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moto1Component } from './moto1.component';

describe('Moto1Component', () => {
  let component: Moto1Component;
  let fixture: ComponentFixture<Moto1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Moto1Component]
    });
    fixture = TestBed.createComponent(Moto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
