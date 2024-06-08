import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMotoComponent } from './details-moto.component';

describe('DetailsMotoComponent', () => {
  let component: DetailsMotoComponent;
  let fixture: ComponentFixture<DetailsMotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsMotoComponent]
    });
    fixture = TestBed.createComponent(DetailsMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
