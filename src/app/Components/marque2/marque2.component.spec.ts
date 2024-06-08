import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marque2Component } from './marque2.component';

describe('Marque2Component', () => {
  let component: Marque2Component;
  let fixture: ComponentFixture<Marque2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Marque2Component]
    });
    fixture = TestBed.createComponent(Marque2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
