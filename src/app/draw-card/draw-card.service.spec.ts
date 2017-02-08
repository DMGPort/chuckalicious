/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrawCardService } from './draw-card.service';

describe('DrawCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawCardService]
    });
  });

  it('should ...', inject([DrawCardService], (service: DrawCardService) => {
    expect(service).toBeTruthy();
  }));
});
