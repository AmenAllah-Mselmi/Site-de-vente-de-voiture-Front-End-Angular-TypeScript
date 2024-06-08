import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAutreComponent } from './details-autre.component';

describe('DetailsAutreComponent', () => {
  let component: DetailsAutreComponent;
  let fixture: ComponentFixture<DetailsAutreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAutreComponent]
    });
    fixture = TestBed.createComponent(DetailsAutreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
