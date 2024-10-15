import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthPage from './pages/AuthPag.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/auth",
    element:<AuthPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={ router } />
  </StrictMode>,
)
