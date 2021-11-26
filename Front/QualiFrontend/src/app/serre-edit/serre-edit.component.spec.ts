import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerreEditComponent } from './serre-edit.component';

describe('SerreEditComponent', () => {
  let component: SerreEditComponent;
  let fixture: ComponentFixture<SerreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
