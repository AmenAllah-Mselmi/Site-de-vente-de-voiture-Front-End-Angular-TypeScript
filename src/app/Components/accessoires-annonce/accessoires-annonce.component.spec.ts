import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiresAnnonceComponent } from './accessoires-annonce.component';

describe('AccessoiresAnnonceComponent', () => {
  let component: AccessoiresAnnonceComponent;
  let fixture: ComponentFixture<AccessoiresAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessoiresAnnonceComponent]
    });
    fixture = TestBed.createComponent(AccessoiresAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
