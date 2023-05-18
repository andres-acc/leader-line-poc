import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as LeaderLine from 'leader-line-new';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('start', { read: ElementRef }) startElement?: ElementRef;
  @ViewChild('end', { read: ElementRef }) endElement?: ElementRef;
  title = 'leader-line-poc';

  ngAfterViewInit() {
    if(this.startElement && this.endElement) {
      const line = new LeaderLine(this.startElement.nativeElement, this.endElement.nativeElement,
        {
          path: 'grid'
        });
    }
  }
}
