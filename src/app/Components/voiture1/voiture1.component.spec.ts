import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voiture1Component } from './voiture1.component';

describe('Voiture1Component', () => {
  let component: Voiture1Component;
  let fixture: ComponentFixture<Voiture1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Voiture1Component]
    });
    fixture = TestBed.createComponent(Voiture1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
