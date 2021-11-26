import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviCreateComponent } from './suivi-create.component';

describe('SuiviCreateComponent', () => {
  let component: SuiviCreateComponent;
  let fixture: ComponentFixture<SuiviCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
