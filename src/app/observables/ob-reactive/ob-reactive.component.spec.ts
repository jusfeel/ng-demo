import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObReactiveComponent } from './ob-reactive.component';

describe('ObReactiveComponent', () => {
  let component: ObReactiveComponent;
  let fixture: ComponentFixture<ObReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
