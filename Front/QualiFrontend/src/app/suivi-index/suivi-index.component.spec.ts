import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviIndexComponent } from './suivi-index.component';

describe('SuiviIndexComponent', () => {
  let component: SuiviIndexComponent;
  let fixture: ComponentFixture<SuiviIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
