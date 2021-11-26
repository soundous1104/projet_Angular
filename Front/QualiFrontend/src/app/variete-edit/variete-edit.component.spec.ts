import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarieteEditComponent } from './variete-edit.component';

describe('VarieteEditComponent', () => {
  let component: VarieteEditComponent;
  let fixture: ComponentFixture<VarieteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarieteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarieteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
