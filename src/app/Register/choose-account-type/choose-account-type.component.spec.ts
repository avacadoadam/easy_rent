import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAccountTypeComponent } from './choose-account-type.component';

describe('ChooseAccountTypeComponent', () => {
  let component: ChooseAccountTypeComponent;
  let fixture: ComponentFixture<ChooseAccountTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAccountTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
