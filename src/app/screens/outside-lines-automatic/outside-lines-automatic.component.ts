import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as LeaderLine from 'leader-line-new';
import { mockOutsideLinesAutomatic } from 'src/app/constants/data.mock';

type DiagramConnections = {
    source: string;
    target: string;
}[][];
  
@Component({
  selector: 'app-outside-lines-automatic',
  templateUrl: './outside-lines-automatic.component.html',
  styleUrls: ['./outside-lines-automatic.component.scss']
})
export class OutsideLinesAutomaticComponent implements  AfterViewInit, OnDestroy {
  groups = mockOutsideLinesAutomatic;
  lines: LeaderLine[] = [];

  ngAfterViewInit(): void {
    const diagramConnection: DiagramConnections = this.groups.map(group => {
      return group.connections.map(connection => {
        return {
          source: group.id,
          target: connection
        }
      })
    });

    const subDiagramConnection: any = this.groups.map(group => {
      return group.items.map(item => {
        return item.connection?.map(connection => {
          return {
            source: `${group.id}-${item.id}`,
            target: `${group.id}-${connection}`
          }
        });
      });
    }).flatMap(connection => connection).filter(a => a);

    const linesConfiguration = this.calculateDistances(diagramConnection);
    const innerLinesConfiguration = this.calculateDistances(subDiagramConnection, false);

    linesConfiguration.forEach(group => {
      group.forEach((line: any) => {
        if(line.type === 'row') {
          this.drawRowLine(line.source, line.target, line.x, line.direction, line?.gravity); 
        }else {
          this.drawColumnLine(line.source, line.target, line.x, line.direction, line?.gravity); 
        }
      })
    })

    innerLinesConfiguration.forEach(group => {
      group.forEach((line: any) => {
        if(line.type === 'row') {
          this.drawRowLine(line.source, line.target, line.x, line.direction, line?.gravity); 
        }else {
          this.drawColumnLine(line.source, line.target, line.x, line.direction, line?.gravity); 
        }
      })
    })
  }

  ngOnDestroy(): void {
    this.lines.forEach(line => {
      line.remove();
    })
  }

  getItemId(group: string, item: string) {
    return `${group}-${item}`;
  }

  calculateDistances(diagramConnection: DiagramConnections, mainContainer: boolean = true): {
      direction: LeaderLine.SocketType;
      x: number;
      source: string;
      target: string;
    }[][] {
    let linesConfiguration = diagramConnection.map((group) => {
      const divide = 100 / group.length;
      const xValues = Array.from({length: group.length}, (_,x) => ((x + 1) * divide) / 2);
      return group.map((line, i) => {
        const containerId = mainContainer ? 'container' : line.source.slice(0, line.source.indexOf('-'));
        const { direction, type } = this.defineConnectionSocket(line.source, line.target, containerId);
        return {
          ...line,
          direction,
          x: xValues[i],
          type
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

    return linesConfiguration;
  }

  drawRowLine(source: string, target: string, x: number, socketDirection: LeaderLine.SocketType, gravity: number): void {
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

  drawColumnLine(source: string, target: string, x: number, socketDirection: LeaderLine.SocketType, gravity: number): void {
    const startElement = document.getElementById(source);
    const endElement = document.getElementById(target);
    if(startElement && endElement) {
      this.lines.push(new LeaderLine(
        LeaderLine.pointAnchor({ element: startElement, x: this.getXValue(socketDirection, x, true), y: socketDirection === 'top' ? '0%' : '100%' }),
        LeaderLine.pointAnchor({ element: endElement, x: this.getXValue(socketDirection, x), y: socketDirection === 'top' ? '100%' : '0%'}),
        { path: 'grid', startSocket: socketDirection, endSocket: socketDirection === 'top' ? 'bottom' : 'top', endSocketGravity: gravity }
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

  getChildrenNodes(source: string, target: string, containerId: string): {sourcePosition: {x: number, y: number, index: number}, targetPosition: {x: number, y: number, index: number}} {
    const container = document.getElementById(containerId);
    let sourcePosition = { x: 0, y: 0, index: 0 };
    let targetPosition = { x: 0, y: 0, index: 0 };
    if(container?.children) {
      const childNodes = Array.from(container?.children).map(node => {
        const { x, y } = node.getBoundingClientRect(); 
        return { x, y, id: node.id };
      });

      sourcePosition = {...childNodes.filter(position => position.id === source)[0], index:  childNodes.findIndex(node => node.id === source)};
      targetPosition = {...childNodes.filter(position => position.id === target)[0], index: childNodes.findIndex(node => node.id === target)};
    }
    return {  sourcePosition, targetPosition }
  }

  defineConnectionSocket(source: string, target: string, containerId: string): { direction: LeaderLine.SocketType, type: 'row' | 'column' } {
    let socket: LeaderLine.SocketType = 'auto';
    const { sourcePosition, targetPosition } = this.getChildrenNodes(source, target, containerId);
    let type: 'row' | 'column' = 'row';
    if(sourcePosition.x === targetPosition.x) {
      type = 'column'; 
      socket = this.calculateColumnSocketDirection(sourcePosition.y, targetPosition.y);
    } else {
      type = 'row';
      socket = this.calculateRowSocketDirection(sourcePosition.index, targetPosition.index);
    } 
    return {
      direction: socket,
      type
    };
  }

  calculateRowSocketDirection(startIndex: number, endIndex:  number): LeaderLine.SocketType {
    let direction: LeaderLine.SocketType = 'auto';
    if(startIndex === -1 && endIndex === -1) {
      direction = 'auto';
    }
    
    if(startIndex + 1 < endIndex) {
      direction = 'top';
    } else if(startIndex > endIndex) {
      direction = 'bottom';
    } else {
      direction = 'auto';
    }

    return direction;
  };

  calculateColumnSocketDirection(startYCoordinate: number, endYCoordinate:  number): LeaderLine.SocketType {
    let direction: LeaderLine.SocketType = 'auto';

    if(startYCoordinate > endYCoordinate) {
      direction = 'top';
    } else if(startYCoordinate < endYCoordinate) {
      direction = 'bottom';
    } 
    return direction;
  };
}
