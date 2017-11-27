import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObSimpleComponent } from './ob-simple.component';

describe('ObSimpleComponent', () => {
  let component: ObSimpleComponent;
  let fixture: ComponentFixture<ObSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
