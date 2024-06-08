import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesAccComponent } from './tous-les-acc.component';

describe('TousLesAccComponent', () => {
  let component: TousLesAccComponent;
  let fixture: ComponentFixture<TousLesAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousLesAccComponent]
    });
    fixture = TestBed.createComponent(TousLesAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
