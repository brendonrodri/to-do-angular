import { TestBed } from '@angular/core/testing';

import { ProviderNotesService } from './provider-notes.service';

describe('ProviderNotesService', () => {
  let service: ProviderNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
