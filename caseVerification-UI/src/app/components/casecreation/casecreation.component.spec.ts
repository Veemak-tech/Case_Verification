import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasecreationComponent } from './casecreation.component';

describe('CasecreationComponent', () => {
  let component: CasecreationComponent;
  let fixture: ComponentFixture<CasecreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasecreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
