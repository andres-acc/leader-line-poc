import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import * as LeaderLine from 'leader-line-new';

@Component({
  selector: 'wm-straight-diagram',
  templateUrl: './wm-straight-diagram.component.html',
  styleUrls: ['./wm-straight-diagram.component.scss']
})
export class StraightDiagramComponent implements AfterViewInit, OnDestroy {
  @Input() groups: any[] = [];
  lines: LeaderLine[] = [];

  ngAfterViewInit(): void {
    const diagramConnection = this.groups.map((group: any) => {
      return group.subgroups.map((subgroup: any) => {
        return subgroup.connections.map((connection: any) => {
          return {
            source: subgroup.id,
            target: connection
          }
        });
      });
    }).flatMap(connection => connection).filter(a => a);

    diagramConnection.forEach(group => {
      group.forEach((connection: any) => {
        this.drawRowLine(connection.source, connection.target);
      });
    })
  }

  ngOnDestroy(): void {
    this.lines.forEach(line => {
      line.remove();
    })
  }

  drawRowLine(source: string, target: string): void {
    const startElement = document.getElementById(source);
    const endElement = document.getElementById(target);
    if(startElement && endElement) {
      const LeaderLineCtor = LeaderLine as any;
      this.lines.push(
        new LeaderLineCtor.default(
          LeaderLine.pointAnchor({ element: startElement, x: '100%', y: this.getSourceYPosition(startElement, endElement)}),
          LeaderLine.pointAnchor({ element: endElement, x: '0%', y: this.getTargetYPosition(startElement, endElement)}),
          { path: 'straight' }
        )
      )
    }
  }
  
  getSourceYPosition(startElement: HTMLElement, endElement: HTMLElement): number | undefined {
    const startHeight = startElement.offsetHeight;
    const startTop = startElement.getBoundingClientRect().top + scrollY;
    const startBottom = startElement.getBoundingClientRect().bottom + scrollY;
    const endHeight = endElement.offsetHeight;
    const endTop = endElement.getBoundingClientRect().top + scrollY;
    const endBottom = endElement.getBoundingClientRect().bottom + scrollY;
    
    if(startTop === endTop) {
      if(startHeight > endHeight) {
        return endHeight / 2;
      } 
    } else if(startTop < endTop){
      if(startBottom === endBottom) {
        return startHeight - (endHeight / 2);
      }
    } 
    
    return undefined;
  }
  
  getTargetYPosition(startElement: HTMLElement, endElement: HTMLElement): number | undefined {
    const startHeight = startElement.offsetHeight;
    const startTop = startElement.getBoundingClientRect().top + scrollY;
    const startBottom = startElement.getBoundingClientRect().bottom + scrollY;
    const endHeight = endElement.offsetHeight;
    const endTop = endElement.getBoundingClientRect().top + scrollY;
    const endBottom = endElement.getBoundingClientRect().bottom + scrollY;
    
    if(startTop === endTop) {
      if(endHeight > startHeight) {
        return startHeight / 2;
      } 
    } else if(startTop > endTop) {
      if(startBottom === endBottom) {
        return endHeight - (startHeight / 2);
      }
    } 

    return undefined;
  }

  getGridValue(subgroup: any): string {
    if(!subgroup.start && !subgroup.length) {
      return 'auto';
    }
    const rowStart = subgroup.start ?? '1';
    const rowLength = subgroup.length ?? '1';
    const rowEnd = Number(rowStart) + Number(rowLength);
    return `${rowStart}/${rowEnd}`;
  };
}
