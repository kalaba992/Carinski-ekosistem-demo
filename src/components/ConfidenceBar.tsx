import { Progress, Group, Text } from '@mantine/core'

interface ConfidenceBarProps {
  score: number
  label: string
  color: string
}

export default function ConfidenceBar({ score, label, color }: ConfidenceBarProps) {
  const pct = Math.round(score * 100)

  return (
    <div>
      <Group justify="space-between" mb={4}>
        <Text size="sm" fw={500}>
          {label}
        </Text>
        <Text size="sm" fw={600} c={color}>
          {pct}%
        </Text>
      </Group>
      <Progress value={pct} color={color} size="md" radius="md" />
    </div>
  )
}
