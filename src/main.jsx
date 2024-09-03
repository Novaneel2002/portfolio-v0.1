import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource/roboto-slab"; // Defaults to weight 400
import "@fontsource/roboto-slab/400.css"; // Specify weight
// import "@fontsource/roboto-slab/400-italic.css"; // Specify weight and style
import { Theme } from './Theme/Theme.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={Theme}>

      <App />
      {/* Novaneel Mandal */}
    </ChakraProvider>
  </StrictMode>,
)
