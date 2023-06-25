import { TestBed } from '@angular/core/testing';

import { ExameneService } from './examene.service';

describe('ExameneService', () => {
  let service: ExameneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExameneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
