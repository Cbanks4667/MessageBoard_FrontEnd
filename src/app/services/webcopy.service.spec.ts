/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebcopyService } from './webcopy.service';

describe('WebcopyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebcopyService]
    });
  });

  it('should ...', inject([WebcopyService], (service: WebcopyService) => {
    expect(service).toBeTruthy();
  }));
});
