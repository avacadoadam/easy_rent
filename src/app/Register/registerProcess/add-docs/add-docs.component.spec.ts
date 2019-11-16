import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocsComponent } from './add-docs.component';

describe('AddDocsComponent', () => {
  let component: AddDocsComponent;
  let fixture: ComponentFixture<AddDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
