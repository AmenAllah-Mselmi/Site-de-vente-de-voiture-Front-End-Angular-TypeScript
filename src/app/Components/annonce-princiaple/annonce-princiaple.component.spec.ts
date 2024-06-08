import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncePrinciapleComponent } from './annonce-princiaple.component';

describe('AnnoncePrinciapleComponent', () => {
  let component: AnnoncePrinciapleComponent;
  let fixture: ComponentFixture<AnnoncePrinciapleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoncePrinciapleComponent]
    });
    fixture = TestBed.createComponent(AnnoncePrinciapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
