import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviEditComponent } from './suivi-edit.component';

describe('SuiviEditComponent', () => {
  let component: SuiviEditComponent;
  let fixture: ComponentFixture<SuiviEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
