import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartydetailsComponent } from './thirdpartydetails.component';

describe('ThirdpartydetailsComponent', () => {
  let component: ThirdpartydetailsComponent;
  let fixture: ComponentFixture<ThirdpartydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdpartydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdpartydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
