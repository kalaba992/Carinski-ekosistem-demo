export interface DemoClassification {
  hsCode: string
  description: string
  confidence: 'HIGH' | 'MEDIUM' | 'LOW'
  confidenceScore: number
  status: 'ILLUSTRATIVE'
  decisionRationale: string
  girPath: string[]
  validationSteps: string[]
  sourceSummary: string
  dutyRate: string
  alternatives: Array<{ code: string; reason: string }>
}

export const demoClassifications: Record<string, DemoClassification> = {
  p1: {
    hsCode: '7318.15',
    description: 'Stainless steel hexagon head screw M6 x 20mm',
    confidence: 'HIGH',
    confidenceScore: 0.92,
    status: 'ILLUSTRATIVE',
    decisionRationale:
      'Product is a threaded fastener made of stainless steel. Heading 7318 covers screws, bolts, nuts, and similar threaded articles of iron or steel. HS subheading family 7318.15 is used here as an illustrative reference for certain screws and bolts. Full 8-digit/10-digit classification depends on the official CN/TARIC/BiH subdivision and product-specific attributes.',
    girPath: [
      'GIR 1: Illustrative routing by heading text — Section XV, Chapter 73 covers articles of iron or steel',
      'GIR 6: Subheading routing by material and physical characteristics — hexagon head, threaded, stainless steel',
    ],
    validationSteps: [
      'Material mapped to the iron/steel articles family for illustrative routing purposes. Final legal classification would require checking the official tariff text, section notes, chapter notes, and national/EU subdivisions.',
      'Article type assessed: threaded fastener with hexagon head — for illustrative routing uses the 7318 heading family',
      'Dimensions (M6 x 20mm) consistent with subheading 7318.15 illustrative scope',
    ],
    sourceSummary:
      'Example reference: HS heading family 7318 / GIR concept — illustrative only. Based on general HS classification principles for threaded fasteners.',
    dutyRate: '3.7% (illustrative)',
    alternatives: [
      { code: '7318.12', reason: 'If hexagonal head with integral washer face (Hex flange screw)' },
    ],
  },
  p2: {
    hsCode: '3926.90',
    description: 'Nylon cable tie, 200mm, UV-resistant',
    confidence: 'HIGH',
    confidenceScore: 0.88,
    status: 'ILLUSTRATIVE',
    decisionRationale:
      'Product is a plastic (nylon) cable tie used for bundling wires and cables. Heading 3926 covers "other articles of plastics." Subheading 3926.90 covers "other" articles of plastics not elsewhere specified or included. Cable ties are classified here as articles for the conveyance or packing of goods are excluded under heading 3923.',
    girPath: [
      'GIR 1: Illustrative routing by heading text — Section VII, Chapter 39 covers plastics and articles thereof',
      'GIR 6: Subheading 3926.90 as "other" — no more specific subheading applies',
    ],
    validationSteps: [
      'Material assessed for illustrative routing: nylon maps to Chapter 39 (plastics)',
      'Function assessed: bundling/fastening — illustrative routing excludes packing material heading 3923',
      'No more specific heading in Chapter 39 for illustrative routing of cable ties',
    ],
    sourceSummary:
      'Example reference: HS heading family 3926 / GIR concept — illustrative only. Based on general HS classification principles for plastic articles.',
    dutyRate: '6.5% (illustrative)',
    alternatives: [],
  },
  p3: {
    hsCode: '8536.69',
    description: '8-pin DIN connector, 250V/5A',
    confidence: 'MEDIUM',
    confidenceScore: 0.78,
    status: 'ILLUSTRATIVE',
    decisionRationale:
      'Product is an electrical connector rated at 250V. Heading 8536 covers "electrical apparatus for switching or protecting electrical circuits, or for making connections to or in electrical circuits" for voltages not exceeding 1000V. Subheading 8536.69 covers "other" plugs and sockets. The DIN connector form factor falls under this residual subheading.',
    girPath: [
      'GIR 1: Illustrative routing by heading text — Section XVI, Chapter 85 covers electrical machinery and equipment',
      'GIR 6: Subheading routing by connector type — "other" plugs and sockets (8536.69)',
    ],
    validationSteps: [
      'Voltage assessed: 250V is within heading 8536 threshold (≤1000V)',
      'Function assessed: makes electrical connections between circuits',
      'Specific subheading cross-checked: not a coaxial connector (8536.70) or telephone-type (8536.69.40)',
    ],
    sourceSummary:
      'Example reference: HS heading family 8536 / GIR concept — illustrative only. Based on general HS classification principles for electrical connectors.',
    dutyRate: '2.5% (illustrative)',
    alternatives: [
      { code: '8536.70', reason: 'If connector uses coaxial technology' },
    ],
  },
  p4: {
    hsCode: '4016.93',
    description: 'EPDM rubber sealing gasket, 150mm diameter',
    confidence: 'HIGH',
    confidenceScore: 0.90,
    status: 'ILLUSTRATIVE',
    decisionRationale:
      'Product is a gasket made of vulcanized rubber (EPDM). Heading 4016 covers "other articles of vulcanized rubber other than hard rubber." Subheading 4016.93 specifically covers "gaskets, washers and other seals." The product matches this description exactly.',
    girPath: [
      'GIR 1: Illustrative routing by heading text — Section VII, Chapter 40 covers rubber and articles thereof',
      'GIR 6: Specific subheading for gaskets and seals (4016.93) applies directly',
    ],
    validationSteps: [
      'Material assessed: EPDM is vulcanized rubber (not hard rubber), routes to Chapter 40',
      'Article type assessed: functions as a sealing gasket — illustrative heading 4016.93',
      'Specific subheading check: 4016.93 covers gaskets and seals',
    ],
    sourceSummary:
      'Example reference: HS heading family 4016 / GIR concept — illustrative only. Based on general HS classification principles for rubber articles.',
    dutyRate: '3.0% (illustrative)',
    alternatives: [],
  },
  p5: {
    hsCode: '7616.99',
    description: 'Aluminium 6061 L-bracket, 50x50x3mm',
    confidence: 'HIGH',
    confidenceScore: 0.85,
    status: 'ILLUSTRATIVE',
    decisionRationale:
      'Product is a mounting bracket made of aluminium. Heading 7616 covers "other articles of aluminium." Subheading 7616.99 covers "other" articles of aluminium not more specifically covered. This bracket is a general-purpose structural article, not a specifically named item like tubes, pipes, or bars.',
    girPath: [
      'GIR 1: Illustrative routing by heading text — Section XV, Chapter 76 covers aluminium and articles thereof',
      'GIR 6: Subheading 7616.99 as residual — no more specific heading applies',
    ],
    validationSteps: [
      'Material assessed: 6061 aluminium alloy routes to Chapter 76',
      'Article type assessed: structural bracket, not a tube/pipe/bar (covered elsewhere in Chapter 76)',
      'General-purpose use: not specialized machinery part — illustrative routing stays in Chapter 76',
    ],
    sourceSummary:
      'Example reference: HS heading family 7616 / GIR concept — illustrative only. Based on general HS classification principles for aluminium articles.',
    dutyRate: '5.0% (illustrative)',
    alternatives: [
      { code: '7616.91', reason: 'If classified as a structure or part of a structure' },
    ],
  },
  p6: {
    hsCode: '8544.49',
    description: 'Insulated copper wire, 1.5mm², 100m roll',
    confidence: 'HIGH',
    confidenceScore: 0.93,
    status: 'ILLUSTRATIVE',
    decisionRationale:
      'Product is insulated electrical wire made of copper. Heading 8544 covers "insulated wire, cable and other insulated electric conductors." Subheading 8544.49 covers "other" electric conductors for a voltage not exceeding 1000V, not fitted with connectors. The wire is PVC-insulated, rated for low voltage, and has no connectors.',
    girPath: [
      'GIR 1: Illustrative routing by heading text — Section XVI, Chapter 85 covers electrical conductors',
      'GIR 6: Subheading routing by voltage (≤80V fails, >80V matches 8544.49) and connector status',
    ],
    validationSteps: [
      'Conductor type assessed: copper, insulated with PVC — routes to heading 8544 family',
      'Voltage rating assessed: standard building wire (300/500V) exceeds 80V threshold for illustrative routing',
      'Connector status assessed: no connectors fitted — illustrative routing excludes heading 8544.42',
    ],
    sourceSummary:
      'Example reference: HS heading family 8544 / GIR concept — illustrative only. Based on general HS classification principles for insulated electrical conductors.',
    dutyRate: '4.0% (illustrative)',
    alternatives: [
      { code: '8544.42', reason: 'If fitted with connectors at either end' },
    ],
  },
  p7: {
    hsCode: '7318.22',
    description: 'Zinc-plated carbon steel flat washer, M8',
    confidence: 'HIGH',
    confidenceScore: 0.91,
    status: 'ILLUSTRATIVE',
    decisionRationale:
      'Product is a flat washer made of carbon steel, zinc-plated. Heading 7318 covers screws, bolts, nuts, and similar articles of iron or steel. Subheading 7318.22 covers "washers" including flat washers and spring washers. The zinc plating does not change the base material classification.',
    girPath: [
      'GIR 1: Illustrative routing by heading text — Section XV, Chapter 73 covers articles of iron or steel',
      'GIR 6: Specific subheading for washers (7318.22) applies directly',
    ],
    validationSteps: [
      'Material assessed: carbon steel maps to iron/steel articles (Chapter 73)',
      'Article type assessed: flat washer — included in heading 7318 for illustrative routing',
      'Surface treatment (zinc plating) does not affect illustrative routing',
    ],
    sourceSummary:
      'Example reference: HS heading family 7318 / GIR concept — illustrative only. Based on general HS classification principles for washers.',
    dutyRate: '3.7% (illustrative)',
    alternatives: [],
  },
  p8: {
    hsCode: '8531.80',
    description: '24V red LED panel indicator, IP65, 22mm',
    confidence: 'MEDIUM',
    confidenceScore: 0.75,
    status: 'ILLUSTRATIVE',
    decisionRationale:
      'Product is an LED indicator light for electrical panels. Heading 8531 covers "electric sound or visual signaling apparatus." Subheading 8531.80 covers "other apparatus" not including indicator panels for motor vehicles (8512) or light-emitting diode (LED) lamps for lighting (8541 or 9405). Panel indicators are visual signaling devices.',
    girPath: [
      'GIR 1: Illustrative routing by heading text — Section XVI, Chapter 85 covers electrical signaling apparatus',
      'GIR 6: Subheading 8531.80 as residual — excludes specific signaling apparatus (8531.10-8531.70) and LED lighting',
    ],
    validationSteps: [
      'Function assessed: visual signaling (status indication), not general illumination — routes to heading 8531',
      'Exclusion cross-check: not a motor vehicle indicator (excluded by Chapter 85 scope notes)',
      'Exclusion cross-check: not an LED lamp for lighting purposes (heading 9405)',
    ],
    sourceSummary:
      'Example reference: HS heading family 8531 / GIR concept — illustrative only. Based on general HS classification principles for electrical signaling apparatus.',
    dutyRate: '2.5% (illustrative)',
    alternatives: [
      { code: '9405.49', reason: 'If classified as an LED luminaire rather than indicator' },
    ],
  },
}
