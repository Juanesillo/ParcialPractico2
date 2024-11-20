/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ConferenicaService } from './conferencia.service';

describe('Service: Conferenica', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConferenicaService]
    });
  });

  it('should ...', inject([ConferenicaService], (service: ConferenicaService) => {
    expect(service).toBeTruthy();
  }));
});
