import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ChakraUIProvider, ReactQueryProvider } from "./providers";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <ChakraUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraUIProvider>
    </ReactQueryProvider>
  </StrictMode>
)
