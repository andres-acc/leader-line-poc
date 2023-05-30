import { 
  AfterViewInit, 
  Component, 
  ContentChild, 
  ElementRef, 
  Input, 
  OnDestroy, 
  TemplateRef 
} from '@angular/core';
import * as LeaderLine from 'leader-line-new';

@Component({
  selector: 'wm-straight-diagram',
  templateUrl: './wm-straight-diagram.component.html',
  styleUrls: ['./wm-straight-diagram.component.scss']
})
export class StraightDiagramComponent implements AfterViewInit, OnDestroy {
  @Input() groups: any[] = [];
  @ContentChild('content', {static: false, read: TemplateRef}) contentRef?: TemplateRef<ElementRef>;
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

    this.groups.map((group: any) => {
      return group.subgroups.map((subgroup: any) => {
        this.addArcsDecorations(subgroup.items);
      });
    });

    diagramConnection.forEach((group) => {
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

  addArcsDecorations(items: any[]): void {
    if(!items) {
      return;
    }

    this.drawUpRows(items[0].id);
    this.drawDownRows(items[items.length - 1].id);
    this.drawBetweenRows(items[0].id, items[items.length - 1].id);
  }

  drawUpRows(elementId: string) {
    const startElement = document.getElementById(elementId);
    const waterMapGroupLineOffsetX = 10;
    const waterMapGroupLineOffsetY = 10;

    if(startElement) {
      const LeaderLineCtor = LeaderLine as any;
      const startRect = startElement.getBoundingClientRect();
      
      const midStartUpBefore = LeaderLine.pointAnchor({ element: startElement, x: startRect.width - waterMapGroupLineOffsetX, y: - waterMapGroupLineOffsetY });
      const midStartUpMiddle = LeaderLine.pointAnchor({ element: startElement, x: startRect.width, y: - waterMapGroupLineOffsetY });
      const midStartUpAfter = LeaderLine.pointAnchor({ element: startElement, x: startRect.width + waterMapGroupLineOffsetX, y: - waterMapGroupLineOffsetY });
      
      const midEndUpBefore = LeaderLine.pointAnchor({ element: startElement, x: - waterMapGroupLineOffsetX, y: - waterMapGroupLineOffsetY });
      const midEndUpMiddle = LeaderLine.pointAnchor({ element: startElement, x: 0, y: - waterMapGroupLineOffsetY });
      const midEndUpAfter = LeaderLine.pointAnchor({ element: startElement, x: waterMapGroupLineOffsetX, y: - waterMapGroupLineOffsetY });

      // First up
      this.lines.push(new LeaderLineCtor.default(
        LeaderLine.pointAnchor({ element: startElement, x: startRect.width - waterMapGroupLineOffsetX, y: 0 }),
        midStartUpBefore,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "behind",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));

      this.lines.push(new LeaderLineCtor.default(
        LeaderLine.pointAnchor({ element: startElement, x: + waterMapGroupLineOffsetX, y: 0 }),
        midEndUpAfter,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "behind",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));

      // right part
      this.lines.push(new LeaderLineCtor.default(
        midStartUpMiddle,
        midStartUpAfter,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "behind",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));

      this.lines.push(new LeaderLineCtor.default(
        midEndUpAfter,
        midEndUpMiddle,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "behind",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));
      
      // Paint arrow
      this.lines.push(new LeaderLineCtor.default(
        midStartUpBefore,
        midStartUpMiddle,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "arrow3",
          "endPlugSize": 1,
          "endPlugColor": "black",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));

      this.lines.push(new LeaderLineCtor.default(
        midEndUpMiddle,
        midEndUpBefore,
        {
          "color": "#AFE1F3",
          "size": 2,
          "startPlug": "arrow3",
          "startPlugSize": 1,
          "startPlugColor": "black",
          "endPlug": "behind",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));
    }
  }

  drawDownRows(elementId: string) {
    const endElement = document.getElementById(elementId);
    const waterMapGroupLineOffsetX = 10;
    const waterMapGroupLineOffsetY = 10;

    if(endElement) {
      const LeaderLineCtor = LeaderLine as any;
      const startRect = endElement.getBoundingClientRect();
      // Then down
      const midStartDownBefore = LeaderLine.pointAnchor({ element: endElement, x: startRect.width - waterMapGroupLineOffsetX, y: startRect.height + waterMapGroupLineOffsetY });
      const midStartDownMiddle = LeaderLine.pointAnchor({ element: endElement, x: startRect.width, y: startRect.height + waterMapGroupLineOffsetY });
      const midStartDownAfter = LeaderLine.pointAnchor({ element: endElement, x: startRect.width + waterMapGroupLineOffsetX, y: startRect.height + waterMapGroupLineOffsetY });

      const midEndDownAfter = LeaderLine.pointAnchor({ element: endElement, x: waterMapGroupLineOffsetX, y: startRect.height + waterMapGroupLineOffsetY });
      const midEndDownMiddle = LeaderLine.pointAnchor({ element: endElement, x: 0, y: startRect.height + waterMapGroupLineOffsetY });
      const midEndDownBefore = LeaderLine.pointAnchor({ element: endElement, x: - waterMapGroupLineOffsetX, y: startRect.height + waterMapGroupLineOffsetY });
    
      this.lines.push(new LeaderLineCtor.default(
        LeaderLine.pointAnchor({ element: endElement, x: startRect.width - waterMapGroupLineOffsetX, y: startRect.height }),
        midStartDownBefore,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "behind",
          "path": "straight"
        }
      ));

      this.lines.push(new LeaderLineCtor.default(
        LeaderLine.pointAnchor({ element: endElement, x: waterMapGroupLineOffsetX, y: startRect.height }),
        midEndDownAfter,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "behind",
          "path": "straight"
        }
      ));

      // right part
      this.lines.push(new LeaderLineCtor.default(
        midStartDownMiddle,
        midStartDownAfter,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "behind",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));

      this.lines.push(new LeaderLineCtor.default(
        midEndDownAfter,
        midEndDownMiddle,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "behind",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));

      // Paint arrow
      this.lines.push(new LeaderLineCtor.default(
        midStartDownBefore,
        midStartDownMiddle,
        {
          "color": "#AFE1F3",
          "size": 2,
          "endPlug": "arrow3",
          "endPlugSize": 1,
          "endPlugColor": "black",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));

      this.lines.push(new LeaderLineCtor.default(
        midEndDownMiddle,
        midEndDownBefore,
        {
          "color": "#AFE1F3",
          "size": 2,
          "startPlug": "arrow3",
          "startPlugSize": 1,
          "startPlugColor": "black",
          "endPlug": "behind",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
      }    
      ));
    }
  }

  drawBetweenRows(startElementId: string, endElementId: string) {
    const startElement = document.getElementById(startElementId);
    const endElement = document.getElementById(endElementId);
    const waterMapGroupLineOffsetX = 10;
    const waterMapGroupLineOffsetY = 10;
    if(!startElement || !endElement) {
      return;
    }
    const LeaderLineCtor = LeaderLine as any;
    const startRect = startElement.getBoundingClientRect();

    const midStartUpAfter = LeaderLine.pointAnchor({ element: startElement, x: startRect.width + waterMapGroupLineOffsetX, y: - waterMapGroupLineOffsetY });
    const midStartDownAfter = LeaderLine.pointAnchor({ element: endElement, x: startRect.width + waterMapGroupLineOffsetX, y: startRect.height + waterMapGroupLineOffsetY });

    const midEndUpBefore = LeaderLine.pointAnchor({ element: startElement, x: - waterMapGroupLineOffsetX, y: - waterMapGroupLineOffsetY });
    const midEndDownBefore = LeaderLine.pointAnchor({ element: endElement, x: - waterMapGroupLineOffsetX, y: startRect.height + waterMapGroupLineOffsetY });

    this.lines.push(new LeaderLineCtor.default(
      midStartUpAfter,
      midStartDownAfter,
      {
        "color": "#AFE1F3",
        "size": 2,
        "endPlug": "behind",
        "path": "straight",
        "startSocket": "left",
        "endSocket": "right"
      }
    ));

    this.lines.push(new LeaderLineCtor.default(
      midEndUpBefore,
      midEndDownBefore,
      {
        "color": "#AFE1F3",
        "size": 2,
        "endPlug": "behind",
        "path": "straight",
        "startSocket": "left",
        "endSocket": "right"
    }
    ));
  }

  drawRowLine(source: string, target: string): void {
    const startElement = document.getElementById(source);
    const endElement = document.getElementById(target);
    const innerWaterMapGroupPipeSize = 10;
    if(startElement && endElement) {
      const LeaderLineCtor = LeaderLine as any;
      const startRect = startElement.getBoundingClientRect();
      const endRect = endElement.getBoundingClientRect();

      const startMidy = (startRect.top + (startRect.height / 2));
      let offsetYStart = 1;
      
      const endMidy = (endRect.top + (endRect.height / 2));
      let offsetYEnd = 1;

      // this.lines.push(
      //   new LeaderLineCtor.default(
      //     LeaderLine.pointAnchor({ element: startElement, x: '100%', y: this.getSourceYPosition(startElement, endElement)}),
      //     LeaderLine.pointAnchor({ element: endElement, x: '0%', y: this.getTargetYPosition(startElement, endElement)}),
      //     { path: 'straight' }
      //   )
      // )

      // this.lines.push(new LeaderLineCtor.default(
      //   LeaderLine.pointAnchor({ element: startElement, x: startRect.width + (endRect.x - startRect.right) / 2 - innerWaterMapGroupPipeSize / 2, y: this.getSourceYPosition(startElement, endElement) }),
      //   LeaderLine.pointAnchor({ element: endElement, x: endRect.x - endElement.getBoundingClientRect().x, y: this.getTargetYPosition(startElement, endElement) }),
      //   {
      //     "color": "#AFE1F3",
      //     "size": 10,
      //     "path": "straight",
      //     "endPlug": "behind",
      //     "startSocket": "left",
      //     "endSocket": "right"
      // }
      // ));
      this.lines.push(new LeaderLineCtor.default(
        LeaderLine.pointAnchor({ element: startElement, x: startRect.width + (endRect.x - startRect.right) / 2 - innerWaterMapGroupPipeSize / 2, y: startMidy - startRect.top + offsetYStart }),
        LeaderLine.pointAnchor({ element: endElement, x: endRect.x - endElement.getBoundingClientRect().x, y: endMidy - endRect.top + offsetYEnd }),
        {
          "color": "#AFE1F3",
          "size": 10,
          "path": "straight",
          "endPlug": "behind",
          "startSocket": "left",
          "endSocket": "right"
      }
      ));
      // this.lines.push(new LeaderLineCtor.default(
      //   LeaderLine.pointAnchor({ element: startElement, x: startRect.width, y: startMidy - startRect.top + offsetYStart }),
      //   LeaderLine.pointAnchor({ element: startElement, x: startRect.width + (endRect.x - startRect.right) / 2 + innerWaterMapGroupPipeSize / 2, y: startMidy - startRect.top + offsetYStart }),
      //   {
      //     "color": "#AFE1F3",
      //     "size": 10,
      //     "endPlug": "arrow3",
      //     "endPlugSize": 0.3,
      //     "endPlugColor": "black",
      //     "path": "straight",
      //     "startSocket": "left",
      //     "endSocket": "right"
      //   }
      // ));
      this.lines.push(new LeaderLineCtor.default(
        LeaderLine.pointAnchor({ element: startElement, x: startRect.width, y: startMidy - startRect.top + offsetYStart }),
        LeaderLine.pointAnchor({ element: startElement, x: startRect.width + (endRect.x - startRect.right) / 2 + innerWaterMapGroupPipeSize / 2, y: startMidy - startRect.top + offsetYStart }),
        {
          "color": "#AFE1F3",
          "size": 10,
          "endPlug": "arrow3",
          "endPlugSize": 0.3,
          "endPlugColor": "black",
          "path": "straight",
          "startSocket": "left",
          "endSocket": "right"
        }
      ));
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

  getGridColumns(): string {
    const dataSections = this.groups.length;
    return `repeat(${dataSections}, 1fr)`;
  }
}
