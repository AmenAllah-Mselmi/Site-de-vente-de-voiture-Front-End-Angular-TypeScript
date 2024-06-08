import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreAnnonceComponent } from './autre-annonce.component';

describe('AutreAnnonceComponent', () => {
  let component: AutreAnnonceComponent;
  let fixture: ComponentFixture<AutreAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutreAnnonceComponent]
    });
    fixture = TestBed.createComponent(AutreAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
