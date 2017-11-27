import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObRxjsStreamsComponent } from './ob-rxjs-streams.component';

describe('ObRxjsStreamsComponent', () => {
  let component: ObRxjsStreamsComponent;
  let fixture: ComponentFixture<ObRxjsStreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObRxjsStreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObRxjsStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
