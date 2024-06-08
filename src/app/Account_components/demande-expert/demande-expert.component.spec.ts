import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeExpertComponent } from './demande-expert.component';

describe('DemandeExpertComponent', () => {
  let component: DemandeExpertComponent;
  let fixture: ComponentFixture<DemandeExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeExpertComponent]
    });
    fixture = TestBed.createComponent(DemandeExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
