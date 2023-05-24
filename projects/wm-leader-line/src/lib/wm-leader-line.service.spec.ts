import { TestBed } from '@angular/core/testing';

import { WmLeaderLineService } from './wm-leader-line.service';

describe('WmLeaderLineService', () => {
  let service: WmLeaderLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WmLeaderLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
