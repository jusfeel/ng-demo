import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObRetryComponent } from './ob-retry.component';

describe('ObRetryComponent', () => {
  let component: ObRetryComponent;
  let fixture: ComponentFixture<ObRetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObRetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObRetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
