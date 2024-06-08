import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionsAnnonceComponent } from './camions-annonce.component';

describe('CamionsAnnonceComponent', () => {
  let component: CamionsAnnonceComponent;
  let fixture: ComponentFixture<CamionsAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamionsAnnonceComponent]
    });
    fixture = TestBed.createComponent(CamionsAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
