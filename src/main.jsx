import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'   // ✅ import toast system
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* Global toast container */}
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          background: 'rgba(15, 15, 15, 0.95)',
          color: '#fff',
          border: '1px solid rgba(0,180,255,0.3)',
          borderRadius: '10px',
        },
        success: {
          iconTheme: {
            primary: '#00b4ff',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#ff4b4b',
            secondary: '#fff',
          },
        },
      }}
    />
    <App />
  </BrowserRouter>
)
