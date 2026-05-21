import { Paper, Text, Group, Badge, Stack } from '@mantine/core'
import type { DemoClassification } from '../demo/demoClassifications'

interface ClassificationResultProps {
  result: DemoClassification
}

export default function ClassificationResult({ result }: ClassificationResultProps) {
  return (
    <Paper shadow="sm" p="xl" radius="md" withBorder>
      <Stack gap="md">
        <Group justify="space-between" wrap="nowrap">
          <div>
            <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
              HS Code
            </Text>
            <Text size="xxl" fw={700} style={{ fontFamily: 'monospace' }}>
              {result.hsCode}
            </Text>
          </div>
          <Badge
            color={result.confidence === 'HIGH' ? 'green' : result.confidence === 'MEDIUM' ? 'yellow' : 'red'}
            size="lg"
            variant="filled"
          >
            ILLUSTRATIVE
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {result.description}
        </Text>

        <Text size="xs" c="orange" fw={600} style={{ fontStyle: 'italic' }}>
          Demo only — illustrative classification. Not legal advice and not an official customs classification.
        </Text>

        <Group gap="xs">
          <Text size="sm" fw={500}>
            Confidence:
          </Text>
          <Text size="sm" c={result.confidence === 'HIGH' ? 'green' : result.confidence === 'MEDIUM' ? 'yellow' : 'red'} fw={600}>
            {result.confidence} ({Math.round(result.confidenceScore * 100)}%)
          </Text>
        </Group>

        <Group gap="xs">
          <Text size="sm" fw={500}>
            Illustrative duty rate:
          </Text>
          <Text size="sm">{result.dutyRate}</Text>
        </Group>
      </Stack>
    </Paper>
  )
}
