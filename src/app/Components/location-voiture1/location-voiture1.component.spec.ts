import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoiture1Component } from './location-voiture1.component';

describe('LocationVoiture1Component', () => {
  let component: LocationVoiture1Component;
  let fixture: ComponentFixture<LocationVoiture1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationVoiture1Component]
    });
    fixture = TestBed.createComponent(LocationVoiture1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
