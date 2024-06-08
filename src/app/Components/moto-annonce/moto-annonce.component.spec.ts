import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoAnnonceComponent } from './moto-annonce.component';

describe('MotoAnnonceComponent', () => {
  let component: MotoAnnonceComponent;
  let fixture: ComponentFixture<MotoAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotoAnnonceComponent]
    });
    fixture = TestBed.createComponent(MotoAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
