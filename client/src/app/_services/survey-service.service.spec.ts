import { TestBed } from '@angular/core/testing';

import { SurveyServiceService } from './survey-service.service';

describe('SurveyServiceService', () => {
  let service: SurveyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
