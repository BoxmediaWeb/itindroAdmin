import { TestBed } from '@angular/core/testing';

import { VentanillaService } from './ventanilla.service';

describe('VentanillaService', () => {
  let service: VentanillaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentanillaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
