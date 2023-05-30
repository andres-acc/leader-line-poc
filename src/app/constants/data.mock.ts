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
        items: [
          {
            id: 'source_internal',
            label: 'Internal'
          }, 
          {
            id: 'source_external',
            label: 'External'
          }
        ],
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
        items: [
          {
            id: 'brackish_water_internal_internal',
            label: 'Internal'
          }
        ],
        connections: [
          'internal_brackish_ponds'
        ]
      },
      {
        label: 'Brackish Water External',
        id: 'brackish_water_external',
        items: [
          {
            id: 'brackish_water_external_external',
            label: 'External'
          }
        ],
        connections: [
          'external_brackish_ponds'
        ]
      },
      {
        label: 'Fresh Water',
        id: 'fresh_water',
        items: [
          {
            id: 'fresh_water_fresh_source_1',
            label: 'Fresh Source 1'
          }
        ],
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
        items: [
          {
            id: 'treatment_recycling_facility',
            label: 'Recycling Facility'
          }
        ],
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
        items: [
          {
            id: 'recycling_ponds_recycling_pond_1',
            label: 'Recycling Pond 1'
          }, 
          {
            id: 'recycling_ponds_recycling_pond_2',
            label: 'Recycling Pond 2'
          },
          {
            id: 'recycling_ponds_recycling_pond_3',
            label: 'Recycling Pond 3'
          }
        ],
        connections: [
          'demand_subgroup'
        ],
        start: '2',
        length: '1'
      },
      {
        label: 'Internal Brackish Ponds',
        id: 'internal_brackish_ponds',
        items: [
          {
            id: 'internal_brackish_ponds_brackish_pond_int_1',
            label: 'Brackish Pond Int 1'
          },
          {
            id: 'internal_brackish_ponds_brackish_pond_int_2',
            label: 'Brackish Pond Int 2'
          },
        ],
        connections: [
          'demand_subgroup'
        ],
        start: '3',
        length: '1',
      },
      {
        label: 'External Brackish Ponds',
        id: 'external_brackish_ponds',
        items: [
          {
            id: 'external_brackish_ponds_brackish_pond_ext_1',
            label: 'Brackish Pond Ext 1'
          },
          {
            id: 'external_brackish_ponds_brackish_pond_ext_2',
            label: 'Brackish Pond Ext 2'
          }
        ],
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
        items: [
          {
            id: 'disposal_disposal',
            label: 'Disposal'
          }
        ],
        connections: []
      },
      {
        label: 'Demand',
        id: 'demand_subgroup',
        itemsDirection: 'column',
        items: [
          {
            id: 'demand_subgroup_frac_1',
            label: 'Frac 1'
          },
          {
            id: 'demand_subgroup_drill_1',
            label: 'Drill 1'
          },
          {
            id: 'demand_subgroup_frac_2',
            label: 'Frac 2'
          },
          {
            id: 'demand_subgroup_drill_2',
            label: 'Drill 2'
          }
        ],
        connections: [],
        start: '2',
        length: '3'
      },
      {
        label: 'Cementing',
        id: 'cementing',
        items: [
          {
            id: 'demand_subgroup_cementing_1',
            label: 'Cementing 1'
          }
        ],
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
];

export const mockLinesGridLatest = [
  {
    id: 'source',
    label: 'SOURCE',
    subgroups: [
      {
        label: 'Produced Water',
        id: 'produced_water',
        itemsDirection: 'column',
        items: [
          {
            id: 'source_internal',
            label: 'Internal'
          }, 
          {
            id: 'source_external',
            label: 'External'
          }
        ],
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
        items: [
          {
            id: 'brackish_water_internal_north',
            label: 'Internal North'
          },
          {
            id: 'brackish_water_internal_south',
            label: 'Internal South'
          },
          {
            id: 'brackish_water_external_north',
            label: 'External North'
          },
          {
            id: 'brackish_water_external_south',
            label: 'External South'
          }
        ],
        connections: [
          'brackish_ponds'
        ],
        start: '3',
        length: '2',
        columns: 2
      },
    ]
  },
  {
    id: 'process',
    label: 'PROCESS',
    subgroups: [
      {
        label: 'Treatment',
        id: 'treatment',
        items: [
          {
            id: 'treatment_recycling_facility',
            label: 'Recycling Facility'
          }
        ],
        connections: [
          'recycling_ponds'
        ],
        start: '2',
        length: '1'
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
        items: [
          {
            id: 'recycling_ponds_recycling_pond_1',
            label: 'Recycling Pond 1'
          }, 
          {
            id: 'recycling_ponds_recycling_pond_2',
            label: 'Recycling Pond 2'
          },
          {
            id: 'recycling_ponds_recycling_pond_3',
            label: 'Recycling Pond 3'
          }
        ],
        connections: [
          'demand_subgroup'
        ],
        start: '2',
        length: '1',
        columns: 3
      },
      {
        label: 'Brackish Ponds',
        id: 'brackish_ponds',
        items: [
          {
            id: 'brackish_ponds_brackish_pond_north_1',
            label: 'Brackish Pond North 1'
          },
          {
            id: 'brackish_ponds_brackish_pond_north_2',
            label: 'Brackish Pond North 2'
          },
          {
            id: 'brackish_ponds_brackish_pond_south_1',
            label: 'Brackish Pond South 1'
          },
          {
            id: 'brackish_ponds_brackish_pond_south_2',
            label: 'Brackish Pond South 2'
          },
        ],
        connections: [
          'demand_subgroup'
        ],
        start: '3',
        length: '2',
        columns: 2
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
        items: [
          {
            id: 'disposal_disposal',
            label: 'Disposal'
          }
        ],
        connections: []
      },
      {
        label: 'Operative Demand',
        id: 'demand_subgroup',
        items: [
          {
            id: 'demand_subgroup_frac_1',
            label: 'Frac 1'
          },
          {
            id: 'demand_subgroup_drill_1',
            label: 'Drill 1'
          },
          {
            id: 'demand_subgroup_frac_2',
            label: 'Frac 2'
          },
          {
            id: 'demand_subgroup_drill_2',
            label: 'Drill 2'
          }
        ],
        connections: [],
        start: '2',
        length: '4'
      },
    ]
  }
];

export const barrancaMockLevel1 = [
  {
    id: '',
    label: 'Water Source',
    subgroups: [
      {
        id: 'water_source',
        label: '',
        itemsDirection: 'column',
        items: [
          {
            id: 'lake_in',
            label: 'Lake In'
          }, 
          {
            id: 'river_in',
            label: 'River In'
          }
        ],
        connections: [
          'industrial_services'
        ],
        start: '1',
        length: '3'
      }
    ]
  },
  {
    id: '',
    label: 'Industrial Services',
    subgroups: [
      {
        id: 'industrial_services',
        label: '',
        itemsDirection: 'column',
        items: [
          {
            id: 'industrial_service_from_refinery',
            label: 'Industrial Services From Refinery'
          }
        ],
        connections: [
          'use'
        ],
        start: '2',
        length: '1'
      }
    ]
  },
  {
    id: '',
    label: 'Use',
    subgroups: [
      {
        id: 'use',
        label: '',
        itemsDirection: 'row',
        itemsWrap: true,
        items: [
          {
            id: 'refinery',
            label: 'Refinery'
          }, 
          {
            id: 'petro_chemical',
            label: 'Petro Chemical'
          },
          {
            id: 'balance',
            label: 'Balance'
          },
          {
            id: 'others',
            label: 'Others'
          }
        ],
        connections: [
          't_residual_water'
        ],
        start: '1',
        length: '3'
      }
    ]
  },
  {
    id: '',
    label: 'T.Residual Water',
    subgroups: [
      {
        id: 't_residual_water',
        label: '',
        itemsDirection: 'column',
        items: [
          {
            id: 'treatment_plant',
            label: 'Treatment Plant'
          }
        ],
        connections: [
          'water_destination'
        ],
        start: '2',
        length: '1'
      }
    ]
  },
  {
    id: '',
    label: 'Water Destination',
    subgroups: [
      {
        id: 'water_destination',
        label: '',
        itemsDirection: 'column',
        items: [
          {
            id: 'river_out',
            label: 'River Out'
          },
          {
            id: 'lake_out',
            label: 'Lake Out'
          }
        ],
        connections: [],
        start: '1',
        length: '3'
      }
    ]
  }
];
