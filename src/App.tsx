import { useState } from 'react'
import { Container, Title, Stack, Divider } from '@mantine/core'
import DemoBanner from './components/DemoBanner'
import ProductSelector from './components/ProductSelector'
import ChatArea from './components/ChatArea'
import Footer from './components/Footer'
import type { DemoProduct } from './demo/demoProducts'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<DemoProduct | null>(null)

  return (
    <>
      <DemoBanner />
      <Container size="md" py="xl" style={{ flex: 1 }}>
        <Stack gap="xl">
          <div>
            <Title order={1} size="h3">
              Carinski Ekosistem Demo
            </Title>
          </div>

          <ProductSelector
            onSelect={(product) => setSelectedProduct(product)}
            selectedId={selectedProduct?.id ?? null}
          />

          {selectedProduct && (
            <>
              <Divider />
              <ChatArea product={selectedProduct} />
            </>
          )}
        </Stack>
      </Container>
      <Footer />
    </>
  )
}
