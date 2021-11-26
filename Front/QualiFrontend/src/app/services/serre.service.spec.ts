import { TestBed } from '@angular/core/testing';

import { SerreService } from './serre.service';

describe('SerreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerreService = TestBed.get(SerreService);
    expect(service).toBeTruthy();
  });
});
