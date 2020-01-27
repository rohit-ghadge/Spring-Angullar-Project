import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersubserviceComponent } from './usersubservice.component';

describe('UsersubserviceComponent', () => {
  let component: UsersubserviceComponent;
  let fixture: ComponentFixture<UsersubserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersubserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersubserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
