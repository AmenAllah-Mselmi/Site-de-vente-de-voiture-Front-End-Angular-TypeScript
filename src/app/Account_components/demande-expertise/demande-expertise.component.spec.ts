import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeExpertiseComponent } from './demande-expertise.component';

describe('DemandeExpertiseComponent', () => {
  let component: DemandeExpertiseComponent;
  let fixture: ComponentFixture<DemandeExpertiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeExpertiseComponent]
    });
    fixture = TestBed.createComponent(DemandeExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
