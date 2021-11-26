import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssolementCreateComponent } from './assolement-create.component';

describe('AssolementCreateComponent', () => {
  let component: AssolementCreateComponent;
  let fixture: ComponentFixture<AssolementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssolementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssolementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
