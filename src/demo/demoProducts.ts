export interface DemoProduct {
  id: string
  name: string
  description: string
  material: string
  icon: string
}

export const demoProducts: DemoProduct[] = [
  {
    id: 'p1',
    name: 'Stainless Steel Screw',
    description: 'M6 x 20mm stainless steel hex head screw, fully threaded',
    material: 'Stainless steel',
    icon: '🔩',
  },
  {
    id: 'p2',
    name: 'Plastic Cable Tie',
    description: '200mm nylon cable tie, UV-resistant, 4.8mm width',
    material: 'Plastic (nylon)',
    icon: '🔗',
  },
  {
    id: 'p3',
    name: 'Electric Connector',
    description: '8-pin DIN connector, rated 250V/5A, screw terminals',
    material: 'Plastic housing, brass contacts',
    icon: '🔌',
  },
  {
    id: 'p4',
    name: 'Rubber Gasket',
    description: '150mm diameter EPDM rubber sealing gasket, 5mm thickness',
    material: 'EPDM rubber',
    icon: '⭕',
  },
  {
    id: 'p5',
    name: 'Aluminium Bracket',
    description: 'L-shaped 6061 aluminium mounting bracket, 50x50x3mm',
    material: 'Aluminium 6061',
    icon: '📐',
  },
  {
    id: 'p6',
    name: 'Copper Wire Spool',
    description: '1.5mm² insulated copper wire, 100m roll, PVC insulation',
    material: 'Copper, PVC',
    icon: '🧵',
  },
  {
    id: 'p7',
    name: 'Steel Washer',
    description: 'M8 flat washer, zinc-plated carbon steel, 16mm OD',
    material: 'Carbon steel',
    icon: '⚙️',
  },
  {
    id: 'p8',
    name: 'LED Indicator Light',
    description: '24V red LED panel indicator, IP65, 22mm mounting hole',
    material: 'Plastic, electronic components',
    icon: '💡',
  },
]
