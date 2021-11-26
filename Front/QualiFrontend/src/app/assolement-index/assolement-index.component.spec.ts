import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssolementIndexComponent } from './assolement-index.component';

describe('AssolementIndexComponent', () => {
  let component: AssolementIndexComponent;
  let fixture: ComponentFixture<AssolementIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssolementIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssolementIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
