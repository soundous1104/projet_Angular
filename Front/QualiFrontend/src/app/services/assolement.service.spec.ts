import { TestBed } from '@angular/core/testing';

import { AssolementService } from './assolement.service';

describe('AssolementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssolementService = TestBed.get(AssolementService);
    expect(service).toBeTruthy();
  });
});
