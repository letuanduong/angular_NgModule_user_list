import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServerComponent } from './user-server.component';

describe('UserServerComponent', () => {
  let component: UserServerComponent;
  let fixture: ComponentFixture<UserServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
