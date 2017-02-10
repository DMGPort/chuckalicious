/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UniversalService } from './universal.service';

describe('UniversalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversalService]
    });
  });

  it('should ...', inject([UniversalService], (service: UniversalService) => {
    expect(service).toBeTruthy();
  }));
});
