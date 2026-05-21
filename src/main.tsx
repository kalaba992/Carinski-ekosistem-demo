import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import App from './App'
import './styles/index.css'

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, system-ui, sans-serif',
  defaultRadius: 'md',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
)
