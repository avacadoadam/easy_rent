import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInformationComponent } from './work-information.component';

describe('WorkInformationComponent', () => {
  let component: WorkInformationComponent;
  let fixture: ComponentFixture<WorkInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
