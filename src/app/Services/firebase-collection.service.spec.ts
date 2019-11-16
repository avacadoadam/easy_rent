import { TestBed } from '@angular/core/testing';

import { FirebaseCollectionService } from './firebase-collection.service';

describe('FirebaseCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseCollectionService = TestBed.get(FirebaseCollectionService);
    expect(service).toBeTruthy();
  });
});
