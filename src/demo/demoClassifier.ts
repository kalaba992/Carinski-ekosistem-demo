import { demoClassifications, type DemoClassification } from './demoClassifications'
import type { DemoProduct } from './demoProducts'

export async function classifyProduct(product: DemoProduct): Promise<DemoClassification> {
  const delay = 800 + Math.random() * 1200
  await new Promise((r) => setTimeout(r, delay))

  const result = demoClassifications[product.id]

  if (!result) {
    return {
      hsCode: 'UNKNOWN',
      description: product.description,
      confidence: 'LOW',
      confidenceScore: 0.15,
      status: 'ILLUSTRATIVE',
      decisionRationale: 'This product type is not in the demo dataset.',
      girPath: [],
      validationSteps: ['Product not found in demo reference data'],
      sourceSummary: 'No illustrative classification available.',
      dutyRate: 'N/A',
      alternatives: [],
    }
  }

  return { ...result }
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'HIGH':
      return 'green'
    case 'MEDIUM':
      return 'yellow'
    case 'LOW':
      return 'red'
    default:
      return 'gray'
  }
}
