import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserservicesComponent } from './userservices.component';

describe('UserservicesComponent', () => {
  let component: UserservicesComponent;
  let fixture: ComponentFixture<UserservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
