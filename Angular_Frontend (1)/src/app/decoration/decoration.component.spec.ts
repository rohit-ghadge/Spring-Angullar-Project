import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationComponent } from './decoration.component';

describe('DecorationComponent', () => {
  let component: DecorationComponent;
  let fixture: ComponentFixture<DecorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
