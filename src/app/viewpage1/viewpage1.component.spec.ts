import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpage1Component } from './viewpage1.component';

describe('Viewpage1Component', () => {
  let component: Viewpage1Component;
  let fixture: ComponentFixture<Viewpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
