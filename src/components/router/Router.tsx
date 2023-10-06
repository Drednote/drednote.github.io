import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import App from '../../App'
import Redirect from '@components/redirect/Redirect'
import { Lang } from '@const/lang'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Redirect />,
  },
  {
    path: '/en',
    element: <App lang={Lang.en} />,
  },
  {
    path: '/ru*',
    element: <App lang={Lang.ru} />,
  },
  {
    path: '*',
    element: <Redirect />,
  },
])
