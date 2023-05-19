import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as LeaderLine from 'leader-line-new';
import { mockLinesGrid } from 'src/app/constants/data.mock';

@Component({
  selector: 'app-model-approach',
  templateUrl: './model-approach.component.html',
  styleUrls: ['./model-approach.component.scss']
})
export class ModelApproachComponent implements AfterViewInit, OnDestroy {
  groups: any[] = mockLinesGrid;
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
    
  }

  drawRowLine(source: string, target: string): void {
    const startElement = document.getElementById(source);
    const endElement = document.getElementById(target);
    if(startElement && endElement) {
      this.lines.push(new LeaderLine(
          LeaderLine.pointAnchor({ element: startElement, x: '100%' }),
          LeaderLine.pointAnchor({ element: endElement, x: '0%' }),
          { path: 'straight' }
        )
      )
    }
  }
  
  calculateOrigins(element: HTMLElement, connections: number): number[] {
    let origins: number[] = [];
    const elementHeight = element.offsetHeight;

    Array.from({ length: connections}).forEach(() => {
      const division = elementHeight / connections;
      origins.push(division/2);
    });

    return origins;
  }
}
