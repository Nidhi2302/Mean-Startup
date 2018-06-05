import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallCompComponent } from './api-call-comp.component';

describe('ApiCallCompComponent', () => {
  let component: ApiCallCompComponent;
  let fixture: ComponentFixture<ApiCallCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiCallCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCallCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
