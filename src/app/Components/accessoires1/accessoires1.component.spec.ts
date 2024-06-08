import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessoires1Component } from './accessoires1.component';

describe('Accessoires1Component', () => {
  let component: Accessoires1Component;
  let fixture: ComponentFixture<Accessoires1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Accessoires1Component]
    });
    fixture = TestBed.createComponent(Accessoires1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
