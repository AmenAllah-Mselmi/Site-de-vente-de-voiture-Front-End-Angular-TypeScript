import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsembleDemandesComponent } from './ensemble-demandes.component';

describe('EnsembleDemandesComponent', () => {
  let component: EnsembleDemandesComponent;
  let fixture: ComponentFixture<EnsembleDemandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnsembleDemandesComponent]
    });
    fixture = TestBed.createComponent(EnsembleDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
