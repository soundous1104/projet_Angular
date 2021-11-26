import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagneCreateComponent } from './campagne-create.component';

describe('CampagneCreateComponent', () => {
  let component: CampagneCreateComponent;
  let fixture: ComponentFixture<CampagneCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagneCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
