import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssolementEditComponent } from './assolement-edit.component';

describe('AssolementEditComponent', () => {
  let component: AssolementEditComponent;
  let fixture: ComponentFixture<AssolementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssolementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssolementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
