import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerreCreateComponent } from './serre-create.component';

describe('SerreCreateComponent', () => {
  let component: SerreCreateComponent;
  let fixture: ComponentFixture<SerreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerreCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
