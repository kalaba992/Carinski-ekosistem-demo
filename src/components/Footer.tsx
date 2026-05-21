import { Text, Anchor } from '@mantine/core'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--mantine-color-gray-3)',
        padding: '24px 16px',
        marginTop: 'auto',
      }}
    >
      <Text ta="center" size="sm" c="dimmed">
        Carinski Ekosistem Demo — sanitized public technical showcase.{' '}
        <Anchor
          href="https://github.com/kalaba992/Carinski-ekosistem-demo"
          target="_blank"
          size="sm"
        >
          GitHub
        </Anchor>
      </Text>
    </footer>
  )
}
