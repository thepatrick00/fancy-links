import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import TooltipProvider from './components/TooltipProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </React.StrictMode>
)
