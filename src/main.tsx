import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EstudianteProvider } from './context/EstudianteContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EstudianteProvider>
      <App />
    </EstudianteProvider>
  </StrictMode>,
)
