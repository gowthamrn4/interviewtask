import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallEventComponent } from './call-event.component';

describe('CallEventComponent', () => {
  let component: CallEventComponent;
  let fixture: ComponentFixture<CallEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
