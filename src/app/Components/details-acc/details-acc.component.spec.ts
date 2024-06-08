import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAccComponent } from './details-acc.component';

describe('DetailsAccComponent', () => {
  let component: DetailsAccComponent;
  let fixture: ComponentFixture<DetailsAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAccComponent]
    });
    fixture = TestBed.createComponent(DetailsAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
