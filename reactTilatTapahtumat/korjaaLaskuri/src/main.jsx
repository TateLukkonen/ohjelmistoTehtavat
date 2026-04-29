import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Laskuri from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Laskuri />
  </StrictMode>,
)
