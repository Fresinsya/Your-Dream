import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErorPage from './pages/ErorPage'
import ProductPage from './pages/product.jsx'


const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
    errorElement: <ErorPage />,
  },

  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/register',
    element: <RegisterPage />,
  },

  {
    path: '/product',
    element: <ProductPage />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>,
)
