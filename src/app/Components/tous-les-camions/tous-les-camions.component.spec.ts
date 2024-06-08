import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesCamionsComponent } from './tous-les-camions.component';

describe('TousLesCamionsComponent', () => {
  let component: TousLesCamionsComponent;
  let fixture: ComponentFixture<TousLesCamionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousLesCamionsComponent]
    });
    fixture = TestBed.createComponent(TousLesCamionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
