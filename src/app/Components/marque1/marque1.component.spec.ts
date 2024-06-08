import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marque1Component } from './marque1.component';

describe('Marque1Component', () => {
  let component: Marque1Component;
  let fixture: ComponentFixture<Marque1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Marque1Component]
    });
    fixture = TestBed.createComponent(Marque1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
