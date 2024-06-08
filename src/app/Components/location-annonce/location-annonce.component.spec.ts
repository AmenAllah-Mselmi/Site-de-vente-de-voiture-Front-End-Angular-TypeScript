import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAnnonceComponent } from './location-annonce.component';

describe('LocationAnnonceComponent', () => {
  let component: LocationAnnonceComponent;
  let fixture: ComponentFixture<LocationAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationAnnonceComponent]
    });
    fixture = TestBed.createComponent(LocationAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
