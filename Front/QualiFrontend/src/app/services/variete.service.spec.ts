import { TestBed } from '@angular/core/testing';

import { VarieteService } from './variete.service';

describe('VarieteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VarieteService = TestBed.get(VarieteService);
    expect(service).toBeTruthy();
  });
});
