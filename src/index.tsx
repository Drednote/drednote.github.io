import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/colors.scss'
import './utils/i18n'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>{<App />}</React.StrictMode>,
)
