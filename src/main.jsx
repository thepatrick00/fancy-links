import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './index.css'

import TooltipProvider from './components/TooltipProvider'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SwagbucksPage from './components/SwagbucksPage'
import ContactPage from './components/ContactPage'
import MicrosoftPage from './components/MicrosoftPage'

import ScrollToTop from './hooks/ScrollToTop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/swagbucks',
    element: <SwagbucksPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/microsoft',
    element: <MicrosoftPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={router}>
        <ScrollToTop/>
        <Home />
      </RouterProvider>
    </TooltipProvider>
  // </React.StrictMode>
)
