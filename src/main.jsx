import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import TooltipProvider from './components/TooltipProvider'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </RouterProvider>
  </React.StrictMode>
)
