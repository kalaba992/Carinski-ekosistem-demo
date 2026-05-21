import { SimpleGrid, Card, Text, Group } from '@mantine/core'
import { demoProducts, type DemoProduct } from '../demo/demoProducts'

interface ProductSelectorProps {
  onSelect: (product: DemoProduct) => void
  selectedId: string | null
}

export default function ProductSelector({ onSelect, selectedId }: ProductSelectorProps) {
  return (
    <div>
      <Text size="lg" fw={600} mb="md">
        Select a product to classify:
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
        {demoProducts.map((product) => (
          <Card
            key={product.id}
            shadow="sm"
            padding="md"
            radius="md"
            withBorder
            style={{
              cursor: 'pointer',
              borderColor: selectedId === product.id ? 'var(--mantine-color-blue-5)' : undefined,
              backgroundColor: selectedId === product.id ? 'var(--mantine-color-blue-0)' : undefined,
            }}
            onClick={() => onSelect(product)}
          >
            <Text ta="center" style={{ fontSize: 32 }}>
              {product.icon}
            </Text>
            <Text ta="center" fw={500} size="sm" mt="xs">
              {product.name}
            </Text>
            <Text ta="center" size="xs" c="dimmed" mt={4}>
              {product.material}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  )
}
