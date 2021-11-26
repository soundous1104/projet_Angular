import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureCreateComponent } from './culture-create.component';

describe('CultureCreateComponent', () => {
  let component: CultureCreateComponent;
  let fixture: ComponentFixture<CultureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
