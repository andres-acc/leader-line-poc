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

export const mockOutsideLinesAutomatic = [
  {
    id: 'group1',
    items: [
      {
        id: 'item1'
      },
      {
        id: 'item2'
      }
    ],
    connections: [
      'group2',
      'group3',
      'group4'
    ]
  },
  {
    id: 'group2',
    items: [
      {
        id: 'item1'
      },
      {
        id: 'item2'
      },
      {
        id: 'item3'
      },
      {
        id: 'item4'
      }
    ],
    connections: [
      'group3'
    ]
  },
  {
    id: 'group3',
    items: [
      {
        id: 'item1'
      },
      {
        id: 'item2'
      },
      {
        id: 'item3'
      },
      {
        id: 'item4',
        connection: [
          'item2'
        ]
      }
    ],
    connections: [
      'group1',
      'group2',
      'group4'
    ]
  },
  {
    id: 'group4',
    items: [
      {
        id: 'item1'
      },
    ],
    connections: [
      'group3',
      'group1'
    ]
  }
];

export const mockLinesGrid = [
  {
    id: 'source',
    label: 'SOURCE',
    subgroups: [
      {
        label: 'Produced Water',
        id: 'produced_water',
        itemsDirection: 'column',
        items: ['Internal', 'External'],
        connections: [
          'disposal',
          'treatment'
        ],
        start: '1',
        length: '2'
      },
      {
        label: 'Brackish Water Internal',
        id: 'brackish_water_internal',
        items: ['Internal'],
        connections: [
          'internal_brackish_ponds'
        ]
      },
      {
        label: 'Brackish Water External',
        id: 'brackish_water_external',
        items: ['External'],
        connections: [
          'external_brackish_ponds'
        ]
      },
      {
        label: 'Fresh Water',
        id: 'fresh_water',
        items: ['Fresh Source 1'],
        connections: [
          'cementing'
        ]
      }
    ]
  },
  {
    id: 'process',
    label: 'PROCESS',
    subgroups: [
      {
        label: 'Treatment',
        id: 'treatment',
        items: ['Recycling Facility'],
        connections: [
          'recycling_ponds'
        ],
        start: '2',
        length: '1',
      },
    ]
  },
  {
    id: 'store',
    label: 'STORE',
    subgroups: [
      {
        label: 'Recycling Ponds',
        id: 'recycling_ponds',
        items: ['Recycling Pond 1', 'Recycling Pond 2', 'Recycling Pond 3'],
        connections: [
          'demand_subgroup'
        ],
        start: '2',
        length: '1'
      },
      {
        label: 'Internal Brackish Ponds',
        id: 'internal_brackish_ponds',
        items: ['Brackish Pond Int 1', 'Brackish Pond Int 2'],
        connections: [
          'demand_subgroup'
        ],
        start: '3',
        length: '1',
      },
      {
        label: 'External Brackish Ponds',
        id: 'external_brackish_ponds',
        items: ['Brackish Pond Ext 1', 'Brackish Pond Ext 2'],
        connections: [
          'demand_subgroup'
        ],
        start: '4',
        length: '1',
      },
    ]
  },
  {
    id: 'demand',
    label: 'DEMAND',
    subgroups: [
      {
        label: 'Disposal',
        id: 'disposal',
        items: ['Disposal'],
        connections: []
      },
      {
        label: 'Demand',
        id: 'demand_subgroup',
        itemsDirection: 'column',
        items: ['Frac 1', 'Drill 1', 'Frac 2', 'Drill 2'],
        connections: [],
        start: '2',
        length: '3'
      },
      {
        label: 'Cementing',
        id: 'cementing',
        items: ['Cementing 1'],
        connections: []
      },
    ]
  }
];

export const upstreamMockGrid = [
  {
    id: 'source',
    label: 'SOURCE',
    subgroups: [
      {
        label: 'Produced Water',
        id: 'produced_water',
        itemsDirection: 'column',
        items: ['Internal', 'External'],
        connections: [
          'disposal',
          'treatment'
        ],
        start: '1',
        length: '2'
      },
      {
        label: 'Brackish Water',
        id: 'brackish_water',
        itemsDirection: 'column',
        start: '3',
        length: '3',
        items: ['Internal', 'External'],
        connections: [
          'brackish_ponds'
        ]
      }
    ]
  },
  {
    id: 'process',
    label: 'PROCESS',
    subgroups: [
      {
        label: 'Treatment',
        id: 'treatment',
        items: ['Recycling Facility'],
        connections: ['recycling_ponds'],
        start: '2',
        length: '1'
      }
    ]
  },
  {
    id: 'store',
    label: 'STORE',
    subgroups: [
      {
        label: 'Recycling Ponds',
        id: 'recycling_ponds',
        items: ['Recycling Pond North 1', 'Recycling Pond North 2', 'Recycling Pond South 1'],
        connections: ['operative_demand'],
        start: '2',
        length: '1'
      },
      {
        label: 'Brackish Ponds',
        id: 'brackish_ponds',
        itemsWrap: true,
        items: ['Brackish Pond North 1', 'Brackish Pond North 2', 'Brackish Pond South 1', 'Brackish Pond South 2'],
        connections: ['operative_demand'],
        start: '3',
        length: '3'
      }
    ]
  },
  {
    id: 'demand',
    label: 'DEMAND',
    subgroups: [
      {
        label: 'Disposal',
        id: 'disposal',
        items: ['Disposal'],
        connections: []
      },
      {
        label: 'Operative Demand',
        id: 'operative_demand',
        itemsDirection: 'column',
        items: ['Frac North', 'Drill North', 'Frac South', 'Drill South', 'Selling'],
        connections: [],
        start: '2',
        length: '4'
      }
    ]
  }
]
