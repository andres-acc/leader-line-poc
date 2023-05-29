import { Component } from '@angular/core';
import { mockLinesGrid, upstreamMockGrid, mockLinesGridLatest } from '../../constants/data.mock';

@Component({
  selector: 'app-library-implementation',
  templateUrl: './library-implementation.component.html',
  styleUrls: ['./library-implementation.component.scss']
})
export class LibraryImplementationComponent {
  mockLinesGrid = mockLinesGrid;
  upstreamMockGrid = upstreamMockGrid;
  mockLinesGridLatest = mockLinesGridLatest;
}
