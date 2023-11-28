import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@components/router/Router'
import './utils/i18n'

const App = () => {
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>{App()}</React.StrictMode>,
)
