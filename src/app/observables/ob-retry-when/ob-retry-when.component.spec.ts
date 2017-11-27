import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObRetryWhenComponent } from './ob-retry-when.component';

describe('ObRetryWhenComponent', () => {
  let component: ObRetryWhenComponent;
  let fixture: ComponentFixture<ObRetryWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObRetryWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObRetryWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
