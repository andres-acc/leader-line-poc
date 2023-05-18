import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as LeaderLine from 'leader-line-new';
import { mockOutsideLines } from 'src/app/constants/data.mock';

@Component({
  selector: 'app-outside-lines',
  templateUrl: './outside-lines.component.html',
  styleUrls: ['./outside-lines.component.scss']
})
export class OutsideLinesComponent implements AfterViewInit, OnDestroy {
  groups = mockOutsideLines;
  lines: LeaderLine[] = [];

  ngAfterViewInit(): void {
    const diagramConnection = this.groups.map(group => {
      return group.connections.map(connection => {
        return {
          source: group.id,
          target: connection
        }
      })
    });

    diagramConnection.forEach((group) => {
      group.forEach(line => {
        this.drawLine(line.source, line.target); 
      })
    })
  }

  ngOnDestroy(): void {
    this.lines.forEach(line => {
      line.remove();
    })
  }

  drawLine(source: string, target: { id: string, x: string[], y: string[], gravity: number}): void {
    const startElement = document.getElementById(source);
    const endElement = document.getElementById(target.id);
    if(startElement && endElement) {
      const socketDirection = this.defineConnectionSocket(source, target.id);
      this.lines.push(new LeaderLine(
        LeaderLine.pointAnchor({ element: startElement, x: target.x[0], y: target.y[0],  }),
        LeaderLine.pointAnchor({ element: endElement, x: target.x[1], y: target.y[1],  }),
        { path: 'grid', startSocket: socketDirection, endSocket: socketDirection, endSocketGravity: target.gravity }
      ))
    }
  }

  defineConnectionSocket(source: string, target: string): LeaderLine.SocketType {
    let socket: LeaderLine.SocketType = 'auto';

    const container = document.getElementById('container');
    if(container?.children) {
      const childNodes = Array.from(container?.children).map(node => {
        return node.id
      });
      const startIndex = childNodes.findIndex(node => node === source);
      const endIndex = childNodes.findIndex(node => node === target);
      socket = this.calculateSocketDirection(startIndex, endIndex);
    }
    return socket;
  }

  calculateSocketDirection(startIndex: number, endIndex: number):  LeaderLine.SocketType {
    if(startIndex === -1 && endIndex === -1) {
      return 'auto';
    }
    
    if(startIndex + 1 < endIndex) {
      return 'top';
    } else if(startIndex > endIndex) {
      return 'bottom';
    } else {
      return 'auto';
    }
  };
}
