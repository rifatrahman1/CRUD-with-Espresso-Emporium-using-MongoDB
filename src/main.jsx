import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import Auth_Provider from './Provider/Auth_Provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth_Provider>
      <RouterProvider router={router}></RouterProvider>
    </Auth_Provider>
  </StrictMode>,
)
