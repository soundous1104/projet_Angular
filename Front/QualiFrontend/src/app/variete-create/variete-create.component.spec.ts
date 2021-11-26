import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarieteCreateComponent } from './variete-create.component';

describe('VarieteCreateComponent', () => {
  let component: VarieteCreateComponent;
  let fixture: ComponentFixture<VarieteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarieteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarieteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
