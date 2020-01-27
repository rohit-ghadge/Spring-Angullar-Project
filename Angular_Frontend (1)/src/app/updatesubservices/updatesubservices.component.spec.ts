import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesubservicesComponent } from './updatesubservices.component';

describe('UpdatesubservicesComponent', () => {
  let component: UpdatesubservicesComponent;
  let fixture: ComponentFixture<UpdatesubservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesubservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesubservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
