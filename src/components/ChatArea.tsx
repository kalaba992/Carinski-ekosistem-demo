import { Stack, Text, Loader, Center } from '@mantine/core'
import { classifyProduct } from '../demo/demoClassifier'
import type { DemoProduct } from '../demo/demoProducts'
import type { DemoClassification } from '../demo/demoClassifications'
import ClassificationResult from './ClassificationResult'
import ConfidenceBar from './ConfidenceBar'
import AuditExplanation from './AuditExplanation'
import { useState, useEffect } from 'react'

interface ChatAreaProps {
  product: DemoProduct
}

function statusColor(confidence: string): string {
  switch (confidence) {
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

export default function ChatArea({ product }: ChatAreaProps) {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState<DemoClassification | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setResult(null)

    classifyProduct(product).then((r) => {
      if (!cancelled) {
        setResult(r)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [product])

  if (loading) {
    return (
      <Center py="xl">
        <Stack align="center" gap="sm">
          <Loader size="lg" />
          <Text size="sm" c="dimmed">
            Classifying {product.name}...
          </Text>
        </Stack>
      </Center>
    )
  }

  if (!result) return null

  return (
    <Stack gap="lg">
      <ClassificationResult result={result} />
      <ConfidenceBar
        score={result.confidenceScore}
        label="Classification confidence"
        color={statusColor(result.confidence)}
      />
      <AuditExplanation result={result} />
    </Stack>
  )
}
