export const mockOutsideLines = [
  {
    id: 'group1',
    items: [
      'item1',
      'item2'
    ],
    connections: [
      {
        id: 'group2' ,
        x: ['100%', '0%'],
        y: ['50%', '50%'],
        gravity: 0
      },
      {
        id: 'group3' ,
        x: ['50%', '50%'],
        y: ['0%', '0%'],
        gravity: 0
      },
      {
        id: 'group4' ,
        x: ['55%', '55%'],
        y: ['0%', '0%'],
        gravity: 10
      }
    ]
  },
  {
    id: 'group2',
    items: [
      'item1',
      'item2',
      'item3',
      'item4'
    ],
    connections: [
      {
        id: 'group3',
        x: ['100%', '0%'],
        y: ['50%', '50%'],
        gravity: 0
      }
    ]
  },
  {
    id: 'group3',
    items: [
      'item1',
      'item2',
      'item3',
      'item4',
    ],
    connections: [
      {
        id: 'group1',
        x: ['55%', '55%'],
        y: ['100%', '100%'],
        gravity: 20
      },
      {
        id: 'group2',
        x: ['45%', '45%'],
        y: ['100%', '100%'],
        gravity: 10
      },
      {
        id: 'group4',
        x: ['100%', '0%'],
        y: ['50%', '50%'],
        gravity: 10
      }
    ]
  },
  {
    id: 'group4',
    items: [
      'item1'
    ],
    connections: [
      {
        id: 'group2',
        x: ['50%', '60%'],
        y: ['100%', '100%'],
        gravity: 30
      },
      {
        id: 'group3',
        x: ['40%', '70%'],
        y: ['100%', '100%'],
        gravity: 10
      }
    ]
  }
];
