import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marque3Component } from './marque3.component';
describe('Marque3Component', () => {
  let component: Marque3Component;
  let fixture: ComponentFixture<Marque3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Marque3Component]
    });
    fixture = TestBed.createComponent(Marque3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
