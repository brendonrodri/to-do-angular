import { TestBed } from '@angular/core/testing';

import { OptionsModalService } from './options-modal.service';

describe('OptionsModalService', () => {
  let service: OptionsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
