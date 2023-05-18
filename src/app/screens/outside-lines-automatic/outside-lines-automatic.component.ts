import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as LeaderLine from 'leader-line-new';
import { mockOutsideLinesAutomatic } from 'src/app/constants/data.mock';

@Component({
  selector: 'app-outside-lines-automatic',
  templateUrl: './outside-lines-automatic.component.html',
  styleUrls: ['./outside-lines-automatic.component.scss']
})
export class OutsideLinesAutomaticComponent implements  AfterViewInit, OnDestroy {
  groups = mockOutsideLinesAutomatic;
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

    let linesConfiguration = diagramConnection.map((group) => {
      const divide = 100 / group.length;
      const xValues = Array.from({length: group.length}, (_,x) => ((x + 1) * divide) / 2);
      return group.map((line, i) => {
        const direction = this.defineConnectionSocket(line.source, line.target);
        return {
          ...line,
          direction,
          x: xValues[i]
        }
      })
    });

    const gravityTopLength= linesConfiguration.flatMap(group => group).filter(line => line.direction === 'top').length;
    const gravityBottomLength = linesConfiguration.flatMap(group => group).filter(line => line.direction === 'bottom').length;

    const gravityTopValues = Array.from({length: gravityTopLength}, (_,y) => (y + 1)*10);
    const gravityBottomValues = Array.from({length: gravityBottomLength}, (_,y) => (y + 1)*10);

    linesConfiguration = linesConfiguration.map(group => {
      return group.map((line) => {
        let gravity = 0;

        if(line.direction === 'top') {
          gravity = gravityTopValues.shift() || 0;
        }else if(line.direction === 'bottom') {
          gravity = gravityBottomValues.shift() || 0;
        }

        return {
          ...line,
          gravity
        }
      })
    });

    linesConfiguration.forEach(group => {
      group.forEach((line: any) => {
        this.drawLine(line.source, line.target, line.x, line.direction, line?.gravity); 
      })
    })
  }

  ngOnDestroy(): void {
    this.lines.forEach(line => {
      line.remove();
    })
  }

  drawLine(source: string, target: string, x: number, socketDirection: LeaderLine.SocketType, gravity: number): void {
    const startElement = document.getElementById(source);
    const endElement = document.getElementById(target);
    if(startElement && endElement) {
      this.lines.push(new LeaderLine(
        LeaderLine.pointAnchor({ element: startElement, x: this.getXValue(socketDirection, x, true), y: this.getYValue(socketDirection) }),
        LeaderLine.pointAnchor({ element: endElement, x: this.getXValue(socketDirection, x), y: this.getYValue(socketDirection) }),
        { path: 'grid', startSocket: socketDirection, endSocket: socketDirection, endSocketGravity: gravity }
      ))
    }
  }

  getXValue(direction: LeaderLine.SocketType, x: number, isStartElement: boolean = false): string {
    if(direction === 'auto') {
      return isStartElement ? '100%' : '0%';
    } else {
      return `${x}%`;
    }
  }

  getYValue(direction: LeaderLine.SocketType): string {
    switch(direction) {
      case 'top':
        return '0%';
      case 'bottom':
        return '100%';
      default:
        return '50%';
    }
  }

  getGravity(): number {
    return 0;
  }

  getChildrenNodes(source: string, target: string): {startIndex: number, endIndex: number} {
    const container = document.getElementById('container');
    let startIndex = 0;
    let endIndex = 0;
    if(container?.children) {
      const childNodes = Array.from(container?.children).map(node => {
        return node.id
      });
      startIndex = childNodes.findIndex(node => node === source);
      endIndex = childNodes.findIndex(node => node === target);
    }
    return { startIndex, endIndex }
  }

  defineConnectionSocket(source: string, target: string): LeaderLine.SocketType {
    let socket: LeaderLine.SocketType = 'auto';
    const { startIndex, endIndex } = this.getChildrenNodes(source, target);
    socket = this.calculateSocketDirection(startIndex, endIndex);
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
