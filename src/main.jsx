import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HotelProvider from './providers/HotelProvider.jsx'

import router from './Routers/Routers.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HotelProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </HotelProvider>
  </React.StrictMode>,
)
