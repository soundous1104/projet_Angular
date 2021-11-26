import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneIndexComponent } from './campagne-index.component';

describe('CampagneIndexComponent', () => {
  let component: CampagneIndexComponent;
  let fixture: ComponentFixture<CampagneIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagneIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagneIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
