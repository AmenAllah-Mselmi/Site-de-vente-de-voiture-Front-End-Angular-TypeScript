import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesLocationsComponent } from './tous-les-locations.component';

describe('TousLesLocationsComponent', () => {
  let component: TousLesLocationsComponent;
  let fixture: ComponentFixture<TousLesLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousLesLocationsComponent]
    });
    fixture = TestBed.createComponent(TousLesLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
