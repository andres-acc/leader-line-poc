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
        const diagramConnectionFlat = diagramConnection.flatMap(t => t);
        const sources = diagramConnectionFlat.filter(a => a.source === connection.source);
        const targets = diagramConnectionFlat.filter(a => a.target === connection.target);
        const sourceY = sources.length > 1 ? this.getSourceYPosition(connection, diagramConnectionFlat) : '';
        const targetY = targets.length > 1 ? this.getTargetYPosition(connection, diagramConnectionFlat) : '';
        this.drawRowLine(connection.source, connection.target, sourceY, targetY);
      });
    })
  }

  getSourceYPosition(connection: any, diagramConnection: any): string {
    const sources = diagramConnection.filter((a: any) => a.source === connection.source);
    const divide = 100 / sources.length;
    const origins = Array.from({length: sources.length}, (_, x) => (x * divide) + (divide / 2));
    const index = sources.findIndex((a: any) => a.target === connection.target);
    return `${origins[index]}%`;
  }
  
  getTargetYPosition(connection: any, diagramConnection: any): string {
    const targets = diagramConnection.filter((a: any) => a.target === connection.target);
    const divide = 100 / targets.length;
    const origins = Array.from({length: targets.length}, (_, x) => (x * divide) + (divide / 2));
    const index = targets.findIndex((a: any) => a.source === connection.source); 
    
    return `${origins[index]}%`;
  }

  ngOnDestroy(): void {
    this.lines.forEach(line => {
      line.remove();
    })
  }

  drawRowLine(source: string, target: string, sourceY: string, targetY: string): void {
    const startElement = document.getElementById(source);
    const endElement = document.getElementById(target);
    if(startElement && endElement) {
      this.lines.push(new LeaderLine(
          LeaderLine.pointAnchor({ element: startElement, x: '100%', y: sourceY }),
          LeaderLine.pointAnchor({ element: endElement, x: '0%', y: targetY }),
          { path: 'straight' }
        )
      )
    }
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
