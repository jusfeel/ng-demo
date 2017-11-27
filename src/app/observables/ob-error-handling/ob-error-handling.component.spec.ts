import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObErrorHandlingComponent } from './ob-error-handling.component';

describe('ObErrorHandlingComponent', () => {
  let component: ObErrorHandlingComponent;
  let fixture: ComponentFixture<ObErrorHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObErrorHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
