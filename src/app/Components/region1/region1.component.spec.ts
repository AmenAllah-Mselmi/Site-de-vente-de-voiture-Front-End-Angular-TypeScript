import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Region1Component } from './region1.component';

describe('Region1Component', () => {
  let component: Region1Component;
  let fixture: ComponentFixture<Region1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Region1Component]
    });
    fixture = TestBed.createComponent(Region1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
