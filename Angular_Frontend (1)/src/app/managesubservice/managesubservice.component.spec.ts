import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesubserviceComponent } from './managesubservice.component';

describe('ManagesubserviceComponent', () => {
  let component: ManagesubserviceComponent;
  let fixture: ComponentFixture<ManagesubserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesubserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesubserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
