import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadminservicesComponent } from './addadminservices.component';

describe('AddadminservicesComponent', () => {
  let component: AddadminservicesComponent;
  let fixture: ComponentFixture<AddadminservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadminservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadminservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
