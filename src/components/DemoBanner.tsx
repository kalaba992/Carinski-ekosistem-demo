import { Alert } from '@mantine/core'
import { IconAlertTriangle } from '@tabler/icons-react'

export default function DemoBanner() {
  return (
    <Alert
      icon={<IconAlertTriangle size={18} />}
      color="yellow"
      variant="filled"
      style={{
        borderRadius: 0,
        textAlign: 'center',
        fontWeight: 600,
      }}
    >
      Demo only — not legal advice and not an official customs classification.
    </Alert>
  )
}
