import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserforadminComponent } from './listuserforadmin.component';

describe('ListuserforadminComponent', () => {
  let component: ListuserforadminComponent;
  let fixture: ComponentFixture<ListuserforadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuserforadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
