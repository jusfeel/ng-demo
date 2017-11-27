import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObUnsubComponent } from './ob-unsub.component';

describe('ObUnsubComponent', () => {
  let component: ObUnsubComponent;
  let fixture: ComponentFixture<ObUnsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObUnsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObUnsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
