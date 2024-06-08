import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesAutresComponent } from './tous-les-autres.component';

describe('TousLesAutresComponent', () => {
  let component: TousLesAutresComponent;
  let fixture: ComponentFixture<TousLesAutresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousLesAutresComponent]
    });
    fixture = TestBed.createComponent(TousLesAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
