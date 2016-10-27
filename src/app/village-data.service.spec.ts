/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VillageDataService } from './village-data.service';

describe('Service: VillageData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillageDataService]
    });
  });

  it('should ...', inject([VillageDataService], (service: VillageDataService) => {
    expect(service).toBeTruthy();
  }));
});
