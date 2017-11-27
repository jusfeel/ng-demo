import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewSimpleComponent } from './user-view-simple.component';

describe('UserViewSimpleComponent', () => {
  let component: UserViewSimpleComponent;
  let fixture: ComponentFixture<UserViewSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
