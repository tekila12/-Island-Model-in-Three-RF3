import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'

import './App.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App />
    
  </Suspense>
)
