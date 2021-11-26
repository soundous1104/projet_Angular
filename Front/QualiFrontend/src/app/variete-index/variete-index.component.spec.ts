import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarieteIndexComponent } from './variete-index.component';

describe('VarieteIndexComponent', () => {
  let component: VarieteIndexComponent;
  let fixture: ComponentFixture<VarieteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarieteIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarieteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
