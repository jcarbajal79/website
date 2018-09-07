import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XvComponent } from './xv.component';

describe('XvComponent', () => {
  let component: XvComponent;
  let fixture: ComponentFixture<XvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
