import { TestBed } from '@angular/core/testing';

import { FormDataSharingService } from './form-data-sharing.service';

describe('FormDataSharingService', () => {
  let service: FormDataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
