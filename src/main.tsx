import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import App from './App.tsx'
import { ThemeContextProvider } from './utilites/ContextTheme/ThemeContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeContextProvider>
  
)
