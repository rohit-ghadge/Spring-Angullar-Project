import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardningComponent } from './gardning.component';

describe('GardningComponent', () => {
  let component: GardningComponent;
  let fixture: ComponentFixture<GardningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
