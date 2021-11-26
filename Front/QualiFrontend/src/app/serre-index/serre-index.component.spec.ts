import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerreIndexComponent } from './serre-index.component';

describe('SerreIndexComponent', () => {
  let component: SerreIndexComponent;
  let fixture: ComponentFixture<SerreIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerreIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerreIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
