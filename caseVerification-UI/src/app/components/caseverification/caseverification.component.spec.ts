import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseverificationComponent } from './caseverification.component';

describe('CaseverificationComponent', () => {
  let component: CaseverificationComponent;
  let fixture: ComponentFixture<CaseverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
