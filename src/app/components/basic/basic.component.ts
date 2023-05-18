import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as LeaderLine from 'leader-line-new';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements AfterViewInit {
  @ViewChild('start', { read: ElementRef }) startElement?: ElementRef;
  @ViewChild('end', { read: ElementRef }) endElement?: ElementRef;
  title = 'leader-line-poc';

  ngAfterViewInit() {
    if(this.startElement && this.endElement) {
      const line = new LeaderLine(
        LeaderLine.pointAnchor({ element: this.startElement.nativeElement, x: '100%', y: '20%' }), 
        this.endElement.nativeElement,
        {
          path: 'grid'
        });
    }
  }
}
