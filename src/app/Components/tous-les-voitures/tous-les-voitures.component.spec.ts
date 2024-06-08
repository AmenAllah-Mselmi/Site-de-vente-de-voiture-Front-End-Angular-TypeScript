import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesVoituresComponent } from './tous-les-voitures.component';

describe('TousLesVoituresComponent', () => {
  let component: TousLesVoituresComponent;
  let fixture: ComponentFixture<TousLesVoituresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousLesVoituresComponent]
    });
    fixture = TestBed.createComponent(TousLesVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
