import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureIndexComponent } from './culture-index.component';

describe('CultureIndexComponent', () => {
  let component: CultureIndexComponent;
  let fixture: ComponentFixture<CultureIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
