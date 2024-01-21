import { TestBed } from '@angular/core/testing';

import { ProviderTaskService } from './provider-task.service';

describe('ProviderTaskService', () => {
  let service: ProviderTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
