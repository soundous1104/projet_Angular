import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineCreateComponent } from './domaine-create.component';

describe('DomaineCreateComponent', () => {
  let component: DomaineCreateComponent;
  let fixture: ComponentFixture<DomaineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
