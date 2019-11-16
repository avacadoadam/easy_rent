import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentListingsComponent } from './rent-listings.component';

describe('RentListingsComponent', () => {
  let component: RentListingsComponent;
  let fixture: ComponentFixture<RentListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
