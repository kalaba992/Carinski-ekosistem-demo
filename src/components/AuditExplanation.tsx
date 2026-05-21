import { Stack, Text, Timeline, Paper } from '@mantine/core'
import { IconRoute, IconChecklist, IconSourceCode, IconScale } from '@tabler/icons-react'
import type { DemoClassification } from '../demo/demoClassifications'

interface AuditExplanationProps {
  result: DemoClassification
}

export default function AuditExplanation({ result }: AuditExplanationProps) {
  return (
    <Stack gap="md">
      <Paper shadow="sm" p="lg" radius="md" withBorder>
        <Text size="sm" fw={600} mb="sm">
          Decision Rationale
        </Text>
        <Text size="sm" c="dimmed" style={{ lineHeight: 1.7 }}>
          {result.decisionRationale}
        </Text>
      </Paper>

      {result.girPath.length > 0 && (
        <Paper shadow="sm" p="lg" radius="md" withBorder>
          <Text size="sm" fw={600} mb="sm">
            GIR Path
          </Text>
          <Timeline active={result.girPath.length - 1} bulletSize={28} lineWidth={2}>
            {result.girPath.map((step, i) => (
              <Timeline.Item
                key={i}
                bullet={<IconRoute size={14} />}
                title={`GIR Step ${i + 1}`}
              >
                <Text size="sm" c="dimmed">
                  {step}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Paper>
      )}

      {result.validationSteps.length > 0 && (
        <Paper shadow="sm" p="lg" radius="md" withBorder>
          <Text size="sm" fw={600} mb="sm">
            Validation Steps
          </Text>
          <Timeline active={result.validationSteps.length - 1} bulletSize={28} lineWidth={2}>
            {result.validationSteps.map((step, i) => (
              <Timeline.Item
                key={i}
                bullet={<IconChecklist size={14} />}
                title={`Check ${i + 1}`}
              >
                <Text size="sm" c="dimmed">
                  {step}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Paper>
      )}

      <Paper shadow="sm" p="lg" radius="md" withBorder>
        <Stack gap="sm">
          <Text size="sm" fw={600}>
            Source Summary
          </Text>
          <Text size="sm" c="dimmed" style={{ lineHeight: 1.7 }}>
            {result.sourceSummary}
          </Text>
        </Stack>
      </Paper>

      {result.alternatives.length > 0 && (
        <Paper shadow="sm" p="lg" radius="md" withBorder>
          <Text size="sm" fw={600} mb="sm">
            Alternative Classifications
          </Text>
          <Stack gap="sm">
            {result.alternatives.map((alt, i) => (
              <Text key={i} size="sm" c="dimmed">
                <Text component="span" fw={600} style={{ fontFamily: 'monospace' }}>
                  {alt.code}
                </Text>
                : {alt.reason}
              </Text>
            ))}
          </Stack>
        </Paper>
      )}
    </Stack>
  )
}
