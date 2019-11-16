import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVerificationComponent } from './add-verification.component';

describe('AddVerificationComponent', () => {
  let component: AddVerificationComponent;
  let fixture: ComponentFixture<AddVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
