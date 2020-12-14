import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caseverification2Component } from './caseverification2.component';

describe('Caseverification2Component', () => {
  let component: Caseverification2Component;
  let fixture: ComponentFixture<Caseverification2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caseverification2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caseverification2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
