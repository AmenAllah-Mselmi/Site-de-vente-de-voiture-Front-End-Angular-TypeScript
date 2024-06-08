import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesMotosComponent } from './tous-les-motos.component';

describe('TousLesMotosComponent', () => {
  let component: TousLesMotosComponent;
  let fixture: ComponentFixture<TousLesMotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousLesMotosComponent]
    });
    fixture = TestBed.createComponent(TousLesMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
