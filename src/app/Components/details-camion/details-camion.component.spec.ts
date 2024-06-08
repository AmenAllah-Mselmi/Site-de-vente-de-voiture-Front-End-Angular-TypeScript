import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCamionComponent } from './details-camion.component';

describe('DetailsCamionComponent', () => {
  let component: DetailsCamionComponent;
  let fixture: ComponentFixture<DetailsCamionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsCamionComponent]
    });
    fixture = TestBed.createComponent(DetailsCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
