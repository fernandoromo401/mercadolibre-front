import { TestBed } from '@angular/core/testing';

import { MutantesService } from './mutantes.service';

describe('MutantesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MutantesService = TestBed.get(MutantesService);
    expect(service).toBeTruthy();
  });
});
