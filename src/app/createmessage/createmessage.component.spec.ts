import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemessageComponent } from './createmessage.component';

describe('CreatemessageComponent', () => {
  let component: CreatemessageComponent;
  let fixture: ComponentFixture<CreatemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
