import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNavComponent } from './account-nav.component';

describe('AccountNavComponent', () => {
  let component: AccountNavComponent;
  let fixture: ComponentFixture<AccountNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountNavComponent]
    });
    fixture = TestBed.createComponent(AccountNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
