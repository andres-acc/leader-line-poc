import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as LeaderLine from 'leader-line-new';
import { mockLinesGrid, upstreamMockGrid } from 'src/app/constants/data.mock';

@Component({
  selector: 'app-model-approach',
  templateUrl: './model-approach.component.html',
  styleUrls: ['./model-approach.component.scss']
})
export class ModelApproachComponent implements AfterViewInit, OnDestroy {
  groups: any[] = upstreamMockGrid;
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
      this.lines.push(new LeaderLine(
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
